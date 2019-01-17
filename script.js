// Important!!! 
// CLOSURES - a function ran. The function is executed. It's never 
// going to execute again, BUT it's going to remember that there
// are references to those variables, so the child scope always has
// acces to the parent scope, but not the other way around!!!

// CURRYING - is the process of convertign a function that takes multiple 
// args into a function that takes them one at a time.

// COMPOSE - is the act of putting two functions together to form a 
// third function where the output of one function is the input of 
// the other.

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombutton = document.getElementById("randombutton");

function getBodyBackground() {
	var style = getComputedStyle(body);
	var background = style.background;
	return background;
}

// First we want to split the string to find which element is the
// one we need, then remove the last character of it.
function splitString1() {
	var splitString = getBodyBackground().split(" ");
	return splitString[6].slice(0, -1);
}

function splitString2() {
	var splitString = getBodyBackground().split(" ");
	return splitString[7].slice(0, -1);
}

function setInputColorToBodyBackground() {
	var color1string = colourNameToHex(splitString1());
	var color2string = colourNameToHex(splitString2());

	color1.setAttribute("value",color1string);
	color2.setAttribute("value",color2string);
}

// A function to change the rgb values to hex.
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomNumberGenerator(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return RandomNumber = Math.floor( Math.random() * (n - m + 1) ) + m;
}

function setRandomNumber()
{
	var randomNumber1 = randomNumberGenerator(0,256);
	var randomNumber2 = randomNumberGenerator(0,256);
	var randomNumber3 = randomNumberGenerator(0,256);
	var randomNumber4 = randomNumberGenerator(0,256);
	var randomNumber5 = randomNumberGenerator(0,256);
	var randomNumber6 = randomNumberGenerator(0,256);

 	body.style.background = "linear-gradient(to right, " 
	+ 'rgb(' + randomNumber1 + ',' 
	+ randomNumber2 + ',' 
	+ randomNumber3 + ')' 
	+ ", " 
	+ 'rgb(' + randomNumber4 + ',' 
	+ randomNumber5 + ',' 
	+ randomNumber6 + ')'  
	+ ")";

	css.textContent = body.style.background + ";";

	// Using the previously defined functions, the random rgb
	// numbers are converted to hex numbers.
	var firstHex = rgbToHex(randomNumber1, randomNumber2, randomNumber3);
	var secondHex = rgbToHex(randomNumber4, randomNumber5, randomNumber6);

	// It needs to be defined like this, with setAttribute the color
	// of the input won't change in case of first changing the background
	// color by clicking in the input field and then using the random button.
	color1.value = firstHex;
	color2.value = secondHex;
}

setInputColorToBodyBackground();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randombutton.addEventListener("click", setRandomNumber);


