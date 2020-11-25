console.log('hello');

// alert('tekst2')

// How to write a comment line 

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
// console.log(someNumber);

// var age = prompt('What is your age?');
 
// document.getElementById('someText').innerHTML = age ;

// Numery w JS

var num1 = 10;
// wzrost num1 o 1
num1++
// ubytek num1 o 1 
num1--;
console.log(num1)

//divide, multiply *, remainder %
console.log(num1 % 6);

// increment/decrement by 10

num1 += 10;
console.log(num1);

/*
1. Utwórz funkcje
2. Wywołaj funkcje
*/
// Utwórz
function fun() {

    console.log('this is a function');
}

//Wywołaj 
fun(); 

/* Let's create a function that take in a name and says hello followed by our name 

for example
Name: "Adrian"
Return "Hello Adrian"
*/

function greeting(yourName) {
    var result = 'Hello ' + ' ' + yourName;
    console.log(result);
}

var name = prompt('What is your name');
 greeting(name);

// how do arguments work in function
// how do we add 2 number together in a function

function sumNumbers(a, b) {
    var result = a + b;

    console.log(result)
}

sumNumbers(10, 10);

