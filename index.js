const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of choices for user input

const questions =[{
    type: 'input',
    name: 'text',
    message: 'Please enter 3 characters'
},{
    type: 'input',
    name: 'text-color',
    message: 'Please enter a text color'
},{
    type: 'choice',
    name: 'shape',
    message: 'Select a shape',
    choice: ['circle','square','triangle']
}]