/**
 * Each square on the grid is allocated in a spiral pattern starting
 * at a location marked 1 and then counting up while spiraling outward.
 * For example, the first few squares are allocated like this:
 *
 * 17  16  15  14  13
 * 18   5   4   3  12
 * 19   6   1   2  11
 * 20   7   8   9  10
 * 21  22  23  24  25
 *
 */

 /**
  * Koordinater?
  * 0 1    0. 0
  * 1 2    1. 0
  * 2 3    1. 1
  * 3 4    0. 1
  * 4 5   -1. 1
  * 5 6   -1. 0
  * 6 7   -1. -1
  * 7 8    0. -1
  * 8 9    1. -1
  * 9 10   2. -1
  * 10 11   2. 0
  * 11 12   2. 1
  */


var advInput = require('./input.js');

function accessDataSteps(input) {
    var matrix = {};

    for (var i = 0; i < input; i++) {
        if (i === 0) {
            matrix[i+1] = { x: 0, y: 0 };
            continue;
        }
    }

    console.log(matrix);
}

function getDirection(index) {

}

accessDataSteps(25);
