var generateNumber = require('./randomNumber.js');
var dollarConversion = require('./convertToDollars.js');

function finalForm(generateNumber) {
return dollarConversion(generateNumber);
}

function addText (finalForm){
  return 'Account balance: \n' + finalForm;
}

module.exports = {
  finalForm: finalForm
};
