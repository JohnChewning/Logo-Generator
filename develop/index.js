const { getUserInput } = require('../lib/userInput');
const { generateSVG } = require('../lib/svgGenerator');
const fs = require('fs');
const path = require('path');  // Import the path module
const inquirer = require('inquirer');

async function saveSVGToFile(svgString, fileName) {
  const folderPath = path.join(__dirname, '..', 'examples'); // Path to the examples folder
  const filePath = path.join(folderPath, `${fileName}.svg`); // Path to the logo.svg file in the examples folder

  // Check if the folder exists, if not, create it
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // Save SVG to file
  fs.writeFileSync(filePath, svgString);

  console.log('Generated ${fileName}.svg in the examples folder');
}

async function main() {
  try {
    // Get user input
    const { text, textColor, shapeType, shapeColor, fileName } = await getUserInput();

    // Generate SVG
    const svgString = generateSVG(text, textColor, shapeType, shapeColor);

    // Save SVG to file in the examples folder
    saveSVGToFile(svgString, fileName);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the application
main();

