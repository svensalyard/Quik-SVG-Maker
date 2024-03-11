// Inputs the correct shape based on user input
const shapeSelect = (shape) => {
	console.log(shape);
	if (shape === "circle") {
		return `circle cx="150" cy="100" r="80"`;
	} else if (shape === "triangle") {
		return `polygon points="255,172 50,172 150,0"`;
	} else {
		return `rect x="85" y="40" width="130" height="130"`;
	}
};

// Takes in responses and output from shapesSelect to generate the final svg code
const shapes = (responses) => {
	return `
	<svg version="1.1" width="300" height="200">

	<${shapeSelect(responses.shape)} fill="${responses.shapecolor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${responses.textcolor}">${responses.name}</text>

</svg>`;
};

module.exports = shapes;
