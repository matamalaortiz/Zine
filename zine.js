#!/usr/bin/env node

// Modules
var exec = require('child_process').exec;
var clc = require('cli-color');
var fs = require('fs')
var createHTML = require('create-html')
var glob = require("glob") // Filter
var imgs = [];

// console.log(clc.green(process.argv[1]));

// Command Arguments
var arg1 = process.argv[2];

// If Command is build then:

if (arg1 == 'build') {

glob("**/*.jpg", function (er, files) {


    for (var i = 0; i < files.length; i++) {
       imgs[i] = '<img src=' + '"'  + files[i] + '"' + '>'; // Todo agregar comillas en files[i]
    }
    // console.log(imgs);


    var html = createHTML({
      title: 'Your images',
      script: 'example.js',
      css: 'example.css',
      lang: 'en',
      head: '<meta name="description" content="example">',
      body: '<h1>A Simple Website with your images:</h1> <br>' + imgs,
      favicon: 'favicon.png'
    })

  // Output the Index.html
  fs.writeFile('index.html', html, function (err) {
    if (err) console.log(err)

    console.log(clc.green('Wohooo ! You have just created a website with your images ! '));

  })

})

} else {
  console.log( "it is not a command");
}
