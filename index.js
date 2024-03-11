const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const shapes = require("./lib/shapes");

//questions array
const questions = [
	{
		type: "input",
		message: "Please enter your initials (max of 3 characters).",
		name: "name",
		validate(answer) {
			if (answer == 3) {
				("Please enter only 3 characters or less!");
			} else {
				return true;
			}
		},
	},
	{
		type: "input",
		message: "Please enter the color for your initials (name or hexidecimal).",
		name: "textcolor",
	},
	{
		type: "list",
		message: "Please choose a shape for the logo.",
		name: "shape",
		choices: ["circle", "triangle", "square"],
	},
	{
		type: "input",
		message: "Please enter a color for your shape (name or hexidecimal).",
		name: "shapecolor",
	},
];

// Render the svg logo by writing the answers and shapes to file
const renderSVG = async (responses) => {
	fs.writeFile("logo.svg", shapes(responses), (err) => err && console.error(err));
};

// Initialize the app by calling questions then feeding them to shapes.js
// then sending the output to renderSVG
const init = async () => {
	const responses = await inquirer.prompt(questions);
	var shape = responses.shape;
	await renderSVG(responses);
	console.log("Generated logo.svg");
};

init();
