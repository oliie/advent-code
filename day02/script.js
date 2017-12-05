var fs = require('fs');
var inputFile = './input.txt';
var input = fs.readFileSync(inputFile, 'utf8');

function checksum1(input) {
    var rows = input.split('\n');
    console.log(rows);
}

checksum1(input);
