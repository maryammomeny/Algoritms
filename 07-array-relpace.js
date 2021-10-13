var x = [-1, 2, 14, -3, 4]
for (var i = 0; i < x.length; i++) {
    if (x[i] < 0) {
        x[i] = 0
    }
}
console.log(x);