'use test';

var fs = require('fs'),
  JSONTool = require('../lib/jsontool');


function TestJSONTool() {
  var inputData = JSON.parse(
      JSONTool.digest(fs.readFileSync('./sample.json'))),
    expectedData = JSON.parse(fs.readFileSync('./sample_output.json'));
  if (JSON.stringify(inputData) !== JSON.stringify(expectedData)) {
    console.log('Test failed');
  } else {
    console.log('Ok.');
  }
}

TestJSONTool();
