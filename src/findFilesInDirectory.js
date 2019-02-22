const find = require('find');

module.exports = (dirName, fileName) => {
  find.file(new RegExp(fileName), dirName, function(files) {
    if (!files.length) {
      console.log(`"${fileName}" does not exist in "${dirName}".`)
    } else {
      console.log(`"${fileName}" found ${files.length} times.`);
      console.log(files);
    }
  })
};
