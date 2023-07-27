const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require ("./lib/shapes.js");
// function that prompts for userinput
function promptUser() {
    inquirer 
        .prompt ([
            {
                type: "input",
                name: "text",
                message:"Please enter no more than three characters to be displayed on your logo",
                validate: (input, answers)  => {
                return input.length <= 3 && input.length >= 1 ? true : answers.message = "Your logo should have no more than 3 characters, please try again";  
                }

            },
            {
                type:"input",
                name:"textColor",
                message:"What would you ike the color of the text to be? Please enter a color keyword or a Hexadecimal number ",
            },
            {
                type:"list",
                name:"shape",
                message:"what shape would you like your logo to be?",
                choices:["Triangle", "Square", "Circle"]
            },
            {
                type:"input",
                name:"shapeColor",
                message:"What would you like the shape color to be?"
            }
        ])
        .then((answers) => {
            writeToFile("logo.svg", answers);  
           
          })
 
       
           
}

function writeToFile(fileName, answers) {
    // empty string to insert the svg container in
    var svgContainer="";
    // creating logo container and setting width and height
    svgContainer= '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag to hold the text inside the container 
    svgContainer += "<g>";
    // settig the logo shape here according the use input 
    svgContainer += `${answers.shape}`;

    var userChoice;
    if (answers.shape === "Circle") {
        userChoice= new Circle();
       svgContainer+= `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`;
    }
    else if (answers.shape === "Triangle") {
        userChoice = new Triangle();
        svgContainer += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;  
    }
    else {
        userChoice = new Square();
        svgContainer += `<rect x="70" y="30" width="160" height="160" fill="${answers.shapeColor}"/>`;
    }
 // adding text to logo and styling it  
 svgContainer += `<text x="150" y="120" font-size="40" text-anchor="middle"  fill="${answers.textColor}">${answers.text}</text>`;
 svgContainer += "</g>";
 svgContainer += "</svg>";
 // generating the svg file using the  file system
 fs.writeFile(fileName, svgContainer, (err) => {
    err ? console.log(err) : console.log("You have successfully generated your SVG file!");
  });
 

} 
    
promptUser();




