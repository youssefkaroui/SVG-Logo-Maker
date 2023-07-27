const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require ("./lib/shapes.js");

function promptUser() {
    inquirer 
        .prompt ([
            {
                type: "input",
                text: "text",
                message:"Please enter no more than three characters to be displayed on your logo",
                validate: function (text){
                    if (text.length > 3) {
                        console.log("Your logo should have no more than 3 characters, please try again");
                        promptUser();
                    }
                    else if (text.length === 0) {
                        console.log("Your logo should have at least one character");
                        promptUser();
                    }
                    else {
                        return true;
                    }
                }

            },
            {
                type:"input",
                name:"textColor",
                message:"What would you ike the color of the text to be? Please enter a color keyword or a Hexadecimal number "


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
 
       
        writeToFile("logo.svg", answers);
}
