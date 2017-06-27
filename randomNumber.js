var min = 100;
var max = 1000000;
var randomNumber = 0;

function generateNumber(min, max) {

return Math.floor(Math.random() * (1 + max - min) + min);

}

module.exports = generateNumber;
