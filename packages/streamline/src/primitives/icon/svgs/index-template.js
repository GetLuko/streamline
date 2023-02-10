/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

function indexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export { default as ${basename} } from './${basename}';`;
  });

  // Remove duplicates
  const uniqueExportEntries = [...new Set(exportEntries)];

  return `${uniqueExportEntries.join('\n')}\n`;
}

module.exports = indexTemplate;
