const numbers = [1, 4, 9, 16];
const newNumbers = numbers.map(number => number * 2);

console.log(numbers);
// output : [1, 4, 9, 16]
console.log(newNumbers);
// output: [2, 8, 18, 32]


let number = [1, 4, 9, 16];
let newNumber = numbers.map(function (n){
    return "Angka " + n * 2;
});
console.log(newNumber);
// output: [ 'Angka 2', 'Angka 8', 'Angka 18', 'Angka 32' ]