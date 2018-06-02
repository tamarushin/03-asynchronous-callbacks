'use strict';

const fs = require('fs');

module.exports = exports = (files, callback) => {
  let contents = [];
  let ctr = 0;
 
  for(let i = 0; i < files.length; i++) {
    fs.readFile(files [0], (err, data) => {
      if (err) { callback(err); 
      } else { 
        contents[i] = data.toString().trim();

        ctr++;

        if (ctr === files.length) {
          callback(null, contents);
        }
      }
    });
  }
};