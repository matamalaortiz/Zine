#!/usr/bin/env node

// Modules
var exec = require('child_process').exec;
var clc = require('cli-color');
var fs = require('fs')
var createHTML = require('create-html')
var glob = require("glob")
var imgs;

// console.log(clc.green(process.argv[1]));

// Command Arguments
var arg1 = process.argv[2];

// If Command is build then:

if (arg1 == 'build') {
  // fs.readdir('./', function(err, files) {
  //
  // if (err) console.log(err);
  //
  // console.log(files);
  //
  // for (var i = 0; i < files.length; i++) {
  //
  // }


glob("**/*.jpg", function (er, files) {

    // console.log(files);

    for(var i = 0; i < files.length; i++) {
       imgs = '<img src=' + files[i] + '>'; // Todo agregar comillas en files[i]
    }
    console.log(imgs);


    var html = createHTML({
      title: 'Your images',
      script: 'example.js',
      css: 'example.css',
      lang: 'en',
      head: '<meta name="description" content="example">',
      body: '<h1>Your images</h1> <br>' + imgs,
      favicon: 'favicon.png'
    })

  // Output the Index.html
  fs.writeFile('index.html', html, function (err) {
    if (err) console.log(err)

    console.log(clc.red('I just created an HTML √√ '));

  })

})
} else {
  console.log( "it is not a command");
}
