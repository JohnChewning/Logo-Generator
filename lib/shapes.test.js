const { Triangle, Circle, Square } = require('./shapes');

//
test('Triangle render method', () => {
  const shape = new Triangle();
  const color = 'blue';
  shape.setColor(color);
  expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
});

// 
test('Circle render method', () => {
    const shape = new Circle();
    const color = 'red';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
  });

//
  test('Square render method', () => {
    const shape = new Square();
    const color = 'green';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
  });