var x = [1, -4, 0, -1];
for (i = 0; i < x.length; i++) {
    if (x[i] < 0) {
        x[i] = 'Turing';
    }
}
console.log(x);

function eliminate_neg(arr) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] < 0) {
            arr[j] = 'JS';
        }
    }
    return arr
}

var y = [2, -6, 5, -4, 7, 8, -9, 3, 0, -1, 2, 4, -5];
console.log(eliminate_neg(y));