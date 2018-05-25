'use strict';

const fs = require('fs');

// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
module.exports = exports = (file, callback) => {
  fs.readFile(file [0], (err, data) => {
    if (err) { callback(err); }
    else { callback(null, data.toString().trim()); }
  });
};