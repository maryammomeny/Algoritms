let x = [2, 14, 15, 3, 8, 12];
avr = 0;
for (var i = 0; i < x.length; i++) {
    avr += x[i];

}
console.log(avr / x.length);

function avr(arr) {
    var evrg = 0;
    for (var i = 0; i < arr.length; i++) {
        evrg += arr[i];
    }
    evrg = evrg / x.length
    return evrg
}
var x = [2, 3, 0, -1, 18, 52]