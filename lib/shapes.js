// Base class for all shapes
class Shape {
  constructor() {
      // Initialize color to an empty string
      this.color = '';
  }

  // Method to set the color of the shape
  setColor(color) {
      this.color = color;
  }
}

// Subclass representing a Triangle, extending the base Shape class
class Triangle extends Shape {
  // Method to render the SVG representation of a Triangle
  render() {
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
  }
}

// Subclass representing a Circle, extending the base Shape class
class Circle extends Shape {
  // Method to render the SVG representation of a Circle
  render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
  }
}

// Subclass representing a Square, extending the base Shape class
class Square extends Shape {
  // Method to render the SVG representation of a Square
  render() {
      return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
  }
}

// Export the shape classes to make them available for use in other modules
module.exports = { Triangle, Circle, Square };
