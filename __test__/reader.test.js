'use strict';

const read = require('../lib/reader.js');

describe('Reader Module', () => {
  it('should callback with an error for a non-exsistent file', (done) => {
    read(['missing.txt'], (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it('should callback with error for any non-existent file', (done) => {
    read([__dirname + '/data/elephants.txt', 'missing.txt'], (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it('should callback with file contents of one file', (done) => {
    const expected = 'words about elephants';
    read([__dirname + '/../data/elephants.txt'], (err, contents) => {
      expect(err).toBeNull();
      const actual = contents.toString();
      expect(actual).toBe(expected);
      done();

    });
  });

it('should callback with file contents of multiple files in order', (done) => {

    let paths = [];

    // NOTE: pitbulls.txt has a lot of text in it so should load slower
    for (let item of ['pitbulls', 'elephants', 'orangutans']) {
      paths.push(__dirname + '/../data/' + item + '.txt');
    }

    let expected, actual;

    read(paths, (err, contents) => {
      expect(err).toBeNull();
      expected = true;
      actual = contents[0].startsWith('pitbulls');

      expect(err).toBeNull();
      expected = 'words about elephants';
      actual = contents[1];

      expect(err).toBeNull();
      expected = 'some text about orangutans';
      actual = contents[2];

      expect(err).toBeNull();;

      done();
    });
  });
});