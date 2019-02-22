const { generateAsFile, generateAsString } = require('./generateFilesList');
const findFileName = require('./findFileName');
const findFilesInDirectory = require('./findFilesInDirectory');


const task = process.argv[2];

switch (task) {
  case 'generateFilesList': {
    const quantity = Number(process.argv[3]);
    if (quantity < 1000) {
      return generateAsString(quantity, process.argv.slice(4));
    }
    if (quantity < 10000001) {
      return generateAsFile(quantity, process.argv.slice(4));
    }
    else {
      console.error('Qantity is too big. It required another implementation.');
      return;
    }
  }
  case 'findFileName': {
    const filePath = process.argv[3];
    const name = process.argv[4];
    findFileName(filePath, name);
    return;
  }
  case 'findFileInDirectory': {
    const dirName = process.argv[3];
    const fileName = process.argv[4];
    findFilesInDirectory(dirName, fileName);
    return;
  }
  default: console.log('Command does not exist.');
}
