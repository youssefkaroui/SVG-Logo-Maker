const { Triangle, Square, Circle} = require("./shapes");

// testing for a square with a pink background color 
describe("Square test", () => {
    test("test for a square with a pink background color", () => {
      const shape = new Square();
      shape.setColor("pink");
      expect(shape.render()).toEqual(
        '<rect x="70" y="30" width="160" height="160" fill="pink" />'
      );
    });
  });

// testing for a trianlge with a #2AAA8A backgroung color 
describe("Triangle test", () => {
    test("test for a triangle with a #2AAA8A background color", () => {
      const shape = new Triangle();
      shape.setColor("#2AAA8A");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="#2AAA8A" />'
      );
    });
  });

// testing for a circle with a red backgroung color 

describe("Circle test", () => {
    test("test for a circle with a red background color", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="red" />'
      );
    });
  });