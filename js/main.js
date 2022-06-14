console.log('Hello my name is Brian');

// Basics of JavaScript

/*
    Multiline Comment in JavaScript

    -- Variable Declaration in JS
    Primitive Data Types: String, Number, Boolean, Undefined, Null
    Objects: Object, Array, Function

    Control Flow

*/

// Variable Declaration

// var myName;

// console.log(myName);


// Primitive Data Types: String, Number, Boolean, Undefined, Null

//  String Declaration
var myName = 'Brian';

// console.log() is equivalent to Python's print() function
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``.
// The tick marks (``) have a special behavior to format the string.
// Tick Marks + ${varName} is equivalent to f"{}" in Python
console.log("My name is ${myName}");
console.log('My name is ${myName}');
console.log(`My name is ${myName}`);


// Integer
var myAge = 100;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;

console.log(pi);
console.log(typeof pi);


// Boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);


// Undefined
var something;

console.log(something);
console.log(typeof something);


// Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull); // A bug in the code!


// Objects: Object, Array, Function

// Object
var myObject = {
    a: 123,
    test: 'Hello World'
}

console.log(myObject);
console.log(typeof myObject);


// Array
var myArr = ['Brian', 'chicago', 'Coding Temple', 10];

console.log(myArr);
console.log(typeof myArr);



// Function
function abc(){};

console.log(abc);
console.log(typeof abc);



// Accessing Properties from an Object
var person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
};

// Bracket Notation
console.log(`My first name is ${person['first']}`);


// Dot Notation
console.log(`My last name is ${person.last}`);

console.log(person.languages);

console.log(`My favorite language is ${person.languages[0]}`);


// Arrays have a "length" property
var myNewArr = ['abc', '123', 'hello world']

console.log(myNewArr, myNewArr.length);


// let - allows us to declare a variable similar as var *let is block-scoped, var is global-scoped*
let myCity = 'Chicago';

if (true){
    var myState = 'Illinois'
    // let myCity = 'Chicago'
    let color = 'Blue'
    console.log(myCity, myState, color);
}

console.log(myCity, myState);


// const - similar to let (block-scoped) - 2 differences: 1. Needs a value when declared 2. Cannot be reassigned
const newVariable = 'something';
console.log(newVariable);

const myBirthday = true;
let ageOfPerson = 40; 

if (myBirthday){
    const myFavColor = 'orange';
    ageOfPerson = ageOfPerson + 1;
    console.log(ageOfPerson);
    // myBirthday = false // Error because myBirthday declared with const -> cannot be reassigned
}
// console.log(myFavColor); // Error: myFavColor not defined

if (myBirthday){
    const myFavColor = 'blue';
    console.log(myFavColor);
}



const cities = ['Chicago', 'New York', 'Boston', 'Los Angeles']

console.log(cities);

cities[2] = 'Denver';

console.log(cities);

// cities = ['Austin', 'Portland']



// JavaScript Hoisting
console.log(hoist);
var hoist = 'example';
console.log(hoist);



console.clear()

/*
    BASIC MATH OPERATIONS
*/


// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum = sum + 1
console.log(sum);

// Subtraction
let diff = 5 - 5;
console.log(diff);
diff -= 5; // diff = diff - 5
console.log(diff);
diff--; // diff = diff - 1
console.log(diff)


// Multiplication
let prod = 5 * 5;
console.log(prod);
prod *= 5; // prod = prod * 5
console.log(prod);

// Division
let quotient = 25 / 5;
console.log(quotient);
quotient /= 5; // quotient = quotient / 5
console.log(quotient);

// Exponents 
let square = 5 ** 2;
console.log(square);
square **= 2; // square = square ** 2
console.log(square);


// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2
console.log(remainder);


// Floor Division
let floor = Math.floor(10/3);
console.log(floor);

// Ceil Division
let ceil = Math.ceil(10/3);
console.log(ceil);



let myString = 'My age is '
let myStringAge = 45

let addedString = myString + myStringAge
console.log(addedString);


let crazyStuff = square + '4';
console.log(crazyStuff) // undefined, 629, 6254; 625+4
console.log(typeof(crazyStuff));


let example = 123 + '456'
console.log(example);


let moreCrazyStuff = 625 - '4';
console.log(moreCrazyStuff);


/* 
    JavaScript Comparisons
*/
console.clear();

console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');

console.log(1 == true);


console.log('10' > 5);

let x = '10';
let y = '9';

console.log(x < y); // watch out!


let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 === arr2); // false, different references

let newArr = ['cat', 'dog', 'pig']

let newerArr = newArr;

console.log(newArr === newerArr);
console.log(newArr === ['cat', 'dog', 'pig'])
console.log(newerArr === ['cat', 'dog', 'pig'])

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)
 console.clear();



// Control Flow

// if (condition expression){code to execute if true};

let  newNumber = 10
console.log('Begin');

if (newNumber > 65){
    console.log('Senior');
} else if (newNumber > 25){
    console.log('Adult');
} else {
    console.log('Child');
}
console.log('End');


// Ternary Operator - (condition) ? value if true : value if false

let ageGroup = (newNumber > 18) ? 'Adult' : 'Child';
console.log(ageGroup);

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 25)  ? 'Adult' : 'Child';
console.log(ageGroup2);


// && - and
// || - or
newNumber = 70;
if (newNumber > 18 && newNumber < 40){
    console.log('Young Adult');
};

if (newNumber < 18 || newNumber > 65){
    console.log('You get a discount')
}


console.clear()


/*
    JavaScript Loops
    for, for...in, for...of, while, do while
*/

// Standard For Loop
// for (counter; expresion/condition; incrementation/decrementation for counter){code to execute each loop}

console.log('Loop has started');

for(let i = 0; i <= 20; i++){
        console.log(i);
};

console.log('Loop has ended');

let colors = ['red', 'orange', 'yellow', 'green'];

for(let i = 0; i < colors.length; i++){
        console.log(i, colors[i]);
};

for(let i = 20; i >= 0; i-=2){
        console.log(i);
};


// for...in -- used to loop over the enumberable properties of an object
let teams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};

for (let t in teams){
    console.log(t)
    console.log(teams[t])
};


// for...of -- used to loop over the elements in an Array
let planets = ['Mercury', 'Mars', 'Earth', 'Venus', 'Jupiter'];

for (let p of planets){
    console.log(p);
    console.log(planets[p]);
};


// While loop
// while (condition){code to execute while condition is true}

let num1 = 1;

while (num1 < 10){
    console.log(num1);
    num1++;
};


// Do While loop... Do the first portion AT LEAST ONCE
// If the while condition is still true, continue the while loop
// do {code to execute} while (condition)

let k = 1;

do {
    k *= 2;
    console.log(k);
} while (k < 10);

// do {
//     var firstName = prompt('What is your name?')
// } while (firstName != 'Brian');

