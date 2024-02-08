const { Triangle, Circle, Square } = require('./shapes');

function generateSVG(text, textColor, shapeType, shapeColor) {
  let shape;

  // Create an instance of the selected shape class
  switch (shapeType) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      throw new Error('Invalid shape type');
  }

  shape.setColor(shapeColor); // Set shape color

  // Get the shape SVG string from the render method
  const shapeSvg = shape.render();

  // Return the complete SVG string
  return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

      ${shapeSvg}

      <g>

      <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="60" fill="${textColor}">${text}</text>

      </g>

    </svg>
  `;
}

module.exports = { generateSVG };
