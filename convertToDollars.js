function dollarConversion (variableAsNumber){
var numAsDollar = ('$' + variableAsNumber.toLocaleString());
return numAsDollar;
}

module.exports = dollarConversion;
