const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input

const questions =[{
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters'
},{
    type: 'input',
    name: 'textColor',
    message: 'Please enter a text color'
},{
    type: 'list',
    name: 'shape',
    message: 'Select a shape',
    choice: ['circle','square','triangle']
},{
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a shape color'
}]