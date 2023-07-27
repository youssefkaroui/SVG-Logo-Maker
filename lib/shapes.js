// defines the shape class 
class shapes {
    constructor() {
      this.color = "";
     
    }
    setColor(colorChoice) {
        this.color= colorChoice
    }
  }
  
  // Children Classes(square) inherits from parent: shapes
   
  
  class Square extends shapes {
    render () {
        return `<rect x="70" y="30" width="160" height="160" fill="${this.color}" />`
    }
  }
  // defines Circle class that inherits from the parent: shapes class
  class Circle extends shapes {
    render() {
      return  `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  // defines triangle class that inherit from shapes class
  class Triangle extends shapes {
    render() {
     return   `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;  
    }
  }
  
  // Exports classes: Triangle, Circle, Square
  module.exports = {Triangle,Circle,Square
  }