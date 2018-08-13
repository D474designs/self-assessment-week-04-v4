var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

// Inside `async-word-count.js`, complete `getTotalWordCount`. `getTotalWordCount`
// should pass the combined word count of the files located at `filePathOne` and
// `filePathTwo` to the `callback` following proper node style convention

// - [ ] Be sure to handle errors at each step
// - [ ] Do not use promises

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  var totalWordCount = getWordCount(filePathOne, callback) + getWordCount(filePathTwo, callback);
  return totalWordCount;
};
module.exports = getTotalWordCount;
