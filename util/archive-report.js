const fs = require('fs');
const path = require('path');

const reportsDir = path.join(__dirname, '../reports');

if (process.argv.length <= 2) {
  throw new Error('No argument is supplied');
}

const filename = process.argv.find(arg => arg.startsWith('-file=')).split('=')[1];

if (!filename) {
  throw new Error('File is not defined');
}

fs.readdir(reportsDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((dir) => {
    const latestFilePath = path.join(reportsDir, dir, 'latest.md');
    const newFilePath = path.join(reportsDir, dir, filename);

    fs.copyFile(latestFilePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error copying file from ${latestFilePath} to ${newFilePath}:`, err);
      } else {
        console.log(`Copied file from ${latestFilePath} to ${newFilePath}`);
      }
    });
  });
});