console.log('Hello, World!');

const DOB = 'Feb 27 1995'
// DOB = 'Mar 15 1996'
console.log(DOB);

let firstName = "Sam"; // ES6 syntax
firstName = "Yang";
console.log(firstName);
console.log(typeof firstName);

var age = 30; // ES5 syntax
// age = Number('72') + Number('11');
age = 72 + 11;
age = 45.8772;
console.log(age);
console.log(typeof age);

let friday = true;
friday = false;
console.log(friday);

let fruits = new Array('apple', 'kiwi', 'orange', 'dragonfruit', 'grape');
fruits.push('pineapple');
fruits.push('kale'); // add item to array
console.log(fruits);
fruits.pop(); // remove last item from array
console.log(fruits);
let slicedOrange = fruits[2].split('');
console.log(slicedOrange);