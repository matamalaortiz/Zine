#!/usr/bin/env node

// Modules
var exec = require('child_process').exec;
var clc = require('cli-color');
var fs = require('fs');
var path = require('path');
var createHTML = require('create-html')
var glob = require("glob") // Filter
var imgs = [];

// console.log(clc.green(process.argv[1]));

// Command Arguments
var arg1 = process.argv[2];

// If Command is build then:

if (arg1 == 'build') {

    glob("**/*.jpg", function(er, files) {

        for (var i = 0; i < files.length; i++) {
            imgs[i] = '<img src=' + '"' + files[i] + '"' + '>';
        }
        // console.log(imgs);


        var html = createHTML({
            title: 'A Simple Website with your images',
            script: 'example.js',
            css: 'mystyle.css',
            lang: 'en',
            favicon: 'favicon.png',
            head: '<meta name="description" content="example">',
            body: '<h1 style=' + '"' + 'position: fixed;' + 'margin-left: 40%;' + 'font-family: helvetica;' + '"' + '> A Simple Website</h1> <br>' + imgs
        })

        // Output the Index.html
        fs.writeFile('index.html', html, function(err) {
            if (err) console.log(err)

            console.log(clc.green("Congrats!! You've just created a website with your images ! "));

        })

        var style = ' "body { background-color: white;} img { width: auto; max-width: 40vw; max-height: auto; padding: 9px; margin-top: 5%; margin-left: 5%;} @media screen and (max-device-width: 767px){ img { width: 100%; max-width: 100vw; max-height: auto; padding: 56px; margin-top: 10%; margin-left: 0%; margin-bottom:-14%; }} h1 { text-decoration: underline;}" '
        var createStyle = 'echo' + style + ' >> mystyle.css';
        exec(createStyle, {}, function() {
            // console.log(createStyle);
        });

        

    })

} else {
    console.log("it is not a command");
}
