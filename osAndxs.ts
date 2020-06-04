
function digPow(n: number, p: number): number {
    // Check against basic conditions
    if (n < 1 || p < 1) return -1;

    // Get the linear combination of the exponentials of n's digits starting from exponent p
    const power = getDigPow(n, p);

    // Discover if `power` is divisible by `n`, e.g. n * k = power
    const division = power / n;

    // Typescript doesn't have an easy way to check if a number is an integer, so check its modulo 1
    if (division % 1 !== 0) {
        return -1; // Not divisible by n
    }

    // We got a integer dividend, return it
    return division;
}

/**
 * Calculate the result of (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...)
 *
 * @param n A positive integer
 * @param p Another positive integer
 */
function getDigPow(n: number, p: number): number {
    // Convert n to string, it is easier to iterate
    const numberToString = n.toString();
    let power: number = 0;

    // For every digit, calculate its exponential value and increase the exponent by 1 each time
    for (const digit of numberToString) {
        power += Math.pow(+digit, p);
        p++;
    }

    return power;
}
