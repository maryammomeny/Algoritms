var my_array = [];
for (var i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 15 !== 0) {
        my_array.push('Fizz');
    } else if (i % 5 === 0 && i % 15 !== 0) {
        my_array.push('Buzz');
    } else if (i % 15 === 0) {
        my_array.push('FizzBuzz');
    } else {
        my_array.push(i);
    }
}
console.log(my_array);