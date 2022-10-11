var ar = [321, 63, 'Marmelada', 4, 'Kruh', 1, 1234, 'Tanjur', 50];
function usporedi(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    // check for num vs string
    if (typeof a === 'number' && typeof b === 'string') {
        return -1;
    }
    // check for string vs num
    if (typeof a === 'string' && typeof b === 'number') {
        return 1;
    }
    // check for string vs string
    if (typeof a === 'string' && typeof b === 'string') {
        if (a < b) return -1;
        else return 1;
    }
    return 0;
}
ar.sort(usporedi);
console.log(ar);