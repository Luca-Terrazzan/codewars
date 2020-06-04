
/**

    Return 1 when ANY odd bit of x equals 1; 0 otherwise.

    x is unsigned.

    (Assume "0 index", aka the least significant bit is considered position 0)

    Assume x is 32 bits.

    Example:

    any_odd(2) will return 1 because at least one odd bit is 1 (0010).

    any_odd(170) will return 1 because all of the odd bits are 1 (10101010).

    any_odd(5) will return 0 because none of the odd bits are 1 (0101).

*/

function anyOdd(x /* integer */) {
    // Convert the integer to a bit string
    const binaryString = x.toString(2);

    // If only one bit, return 0
    if (binaryString.length < 2) return 0;

    // Reverse loop over the string (we want to start from the LSB) and cover only odd bits
    for (let i = binaryString.length - 2; i >= 0; i -= 2) {
        if (binaryString[i] === '1') {
            // Found an odd bit = 1, return 1
            return 1
        };
    }

    // No odd bits, return 0
    return 0;
}

var assert = require('assert')

assert.strictEqual(anyOdd(128), 1);
assert.strictEqual(anyOdd(2863311530), 1);
assert.strictEqual(anyOdd(131), 1);
assert.strictEqual(anyOdd(2), 1);
assert.strictEqual(anyOdd(24082), 1);
assert.strictEqual(anyOdd(0), 0);
assert.strictEqual(anyOdd(85), 0);
assert.strictEqual(anyOdd(1024), 0);
assert.strictEqual(anyOdd(1), 0);
assert.strictEqual(anyOdd(1365), 0);

