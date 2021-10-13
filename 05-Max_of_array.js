var x = [2, 5, 14, 12];
var max = 0;
for (i = 0; i < x.length; i++) {
    if (max < x[i]) {
        max = x[i];
    }
}
console.log(max);
//Using-function:

function max_of_array(y) {
    max = y[0];
    for (var i = 0; i < y.length; i++) {
        if (max < y[i]) {
            max = y[i];
        }
    }
    return max;
}
var y = [4, 1, 5, 15, 22, 54]
console.log(y);