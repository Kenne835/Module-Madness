var generateNumber = require('./randomNumber.js');
var dollarConversion = require('./convertToDollars.js');

function finalForm() {
  var random = generateNumber(100, 1000000);
  console.log(random);
return dollarConversion(random);
}

function addText (finalForm){
  return 'Account balance: \n' + finalForm;
}

module.exports = {
  finalForm: finalForm,

};
