const fs = require('fs');

const readFile = (filePath, options) => new Promise((resolve, reject) => {
  fs.readFile(filePath, options, (err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
});

const writeFile = (filePath, fileBuffer, options) => new Promise((resolve, reject) => {
  fs.writeFile(filePath, fileBuffer, options, (err) => {
    if (err) {
      return reject(err);
    }
    return resolve();
  });
});

const unlinkFile = (filePath) => new Promise((resolve, reject) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      return reject(err);
    }
    return resolve();
  });
});

module.exports = {
  readFile,
  writeFile,
  unlinkFile,
};
