var http = require('http');
var generateNumber = require('./randomNumber.js');
//var dollarConversion = require('./convertToDollars.js');
var finalForm = require('./moduleThree.js');
var server = http.createServer(function(request, response) {
//console.log(generateNumber.generateNumber(100, 1000000));
//console.log(dollarConversion.dollarConversion(239998));
console.log(finalForm.finalForm());
response.writeHead(200);
response.write('Your request has been received successfully.');
response.end();
});
server.listen(8000);
console.log('listening on port 8000');
