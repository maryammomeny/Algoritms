function fibonacci(n) {
    var f = [0, 1];
    for (var i = 2; i < n; i++) {
        var temp = f[i - 1] + f[i - 2];
        if (temp < n) {
            f.push(temp);
        } else {
            return f;
            break;
        }
    }
}

var m = 1000000;
console.log(fibonacci(m));

function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        let a = result[i - 1];
        let b = result[i - 2];

        result.push(a + b);
    }

    return result[n];
}

console.log(fib(7));