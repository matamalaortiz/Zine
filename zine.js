#!/usr/bin/env node

// Modules
var exec = require('child_process').exec;
var clc = require('cli-color');
var fs = require('fs')
var createHTML = require('create-html')

// console.log(clc.green(process.argv[1]));

// Command Arguments
var arg1 = process.argv[2];

// If Command is build then:

if (arg1 == 'build') {
  console.log(clc.red('I just created an HTML √√ '));

  var html = createHTML({
    title: 'example',
    script: 'example.js',
    css: 'example.css',
    lang: 'en',
    head: '<meta name="description" content="example">',
    body: '<h1>Your images</h1><br><img src="download.jpg">',
    favicon: 'favicon.png'
  })

// Output the Index.html
fs.writeFile('index.html', html, function (err) {
  if (err) console.log(err)
})

} else {
  console.log( "it is not a command");
}
