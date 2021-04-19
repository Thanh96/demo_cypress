/* eslint-disable no-unused-vars */
const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const unzipper = require('unzipper');
const { rmdir } = require('fs');
const repoRoot = path.join(__dirname, '..', '..');
const parsePdf = async (pdfName) => {
  const pdfPathname = path.join(repoRoot, pdfName);
  const dataBuffer = fs.readFileSync(pdfPathname);
  return await pdf(dataBuffer); 
};

Cypress.Commands.add('deleteFile', (
  fileName,
) => {
  const downloadPath = 'cypress/fixtures';
  const absolutePath = downloadPath + fileName;

  if (fs.existsSync(absolutePath)) {
    try {
      fs.unlinkSync(absolutePath);
      cy.log('File deleted');
      return null;
    } catch (err) {
      cy.log(err);
    }
  }

  cy.log('File is not exists');
      return null;
});

Cypress.Commands.add('extractZipFile', (fileName) => {
  const downloadDir = 'cypress/fixtures';
  const zipPath = downloadDir + fileName;
  if (fs.existsSync(zipPath)) {
    const readStream = fs.createReadStream(zipPath);
    readStream.pipe(unzipper.Extract({ path: `${downloadDir}` }));
    const jsonname = 'file';
    const jsonPath = downloadDir + jsonname;
    return jsonPath;
  } else {
    console.error('File not downloaded');
    return null;
  }
});

Cypress.Commands.add('deleteFolder', (folderName) => {
  rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

Cypress.Commands.add('getPdfContent', (pdfName) => {
  return String(parsePdf(pdfName));
})