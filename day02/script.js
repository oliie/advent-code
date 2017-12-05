var fs = require('fs');
var inputFile = './input.txt';
var advInput = fs.readFileSync(inputFile, 'utf8');

function checksum1(input) {
    var rows = input.split('\n');
    var highest = 0;
    var lowest = 9;
    var sum = 0;

    for(var r = 0; r < rows.length - 1; r++) {
        var row = rows[r].split(/\s+/g);
        console.log(row);

        for (var c = 0; c < row.length; c++) {
            var cell = row[c].split('');

            for (var n = 0; n < cell.length; n++) {
                var num = +cell[n];
                var lastIndex = (cell.length - 1) === n;

                highest = (num > highest) ? num : highest;
                lowest = (num < lowest) ? num : lowest;

                if (lastIndex) {
                    sum += (highest - lowest);
                    console.log(cell.join(''), highest + ' - ' + lowest + ' = ', (highest - lowest));
                    highest = 0;
                    lowest = 9;
                }
            }
        }
    }

    console.log(sum);
}

checksum1(advInput);
