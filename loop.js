//JavaScript Loops
/*        
Expression 1 sets a variable before the loop starts (let i = 0).

Expression 2 defines the condition for the loop to run (i must be less than 5).

Expression 3 increases a value (i++) each time the code block in the loop has been executed.
*/
console.log("For loop")
let text = "";
// 
for (let i = 0; i < 5; i++) {
    text += i + " ";
  }
console.log(text);  
// 1 2 3 4
let cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 2;
let len = cars.length;

for (; i < len; i++) {
  console.log(cars[i]);
}
/* 
Saab
Ford
*/
i = 0;
let value = '';
for (; i < len; ) {
    value += cars[i] + " ";
    i++;
  }
console.log(value);
// BMW Volvo Saab Ford
// Using let in a loop:
let a = 4;
value = ''
for(let a = 2;a<=10;a++){
    value += a+" ";
} 
console.log(value); // When let is used to declare the a variable in a loop, the a variable will only be visible within the loop.


// 2 3 4 5 6 7 8 9
console.log(a);  // a value  no change
// 4

console.log('-------------------------------------------------');
//For/Of and For/In Loops
console.log("For/in loop");
// The JavaScript for in statement loops through the properties of an Object:
/* 

The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]

*/
const person = {fname:"John", lname:"Doe", age:25};

text = "";
for (let x in person) {
  text += person[x]  + " ";
}
console.log(text);
// John Doe 25 
let numbers = [45, 4, 9, 16, 25];

txt = "";
for (let x in numbers) {
  txt += numbers[x] + " ";
}
console.log(txt);

// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.
/*
The item value
The item index
The array itself

*/
console.log("---------------------------------------------------");
console.log("For Each")
txt = "";
numbers = [99, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + " ";
}
console.log(txt);
// 99 4 9 16 25

console.log("---------------------------------------------------");
console.log("For of loop");
/*
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
*/
cars = ["BMW", "Volvo", "Mini"];

text = "";
for (let x of cars) {
  text += x + " ";
}
console.log(text);
let language = "JavaScript";

text = "";
for (let x of language) {
text += x;
}
console.log(text);
console.log("---------------------------------------------------");
console.log("while loop");
// while loop
text = " ";
while (i < 10) {
    text +=  i + " ";
    i++;
  }
  console.log(text);
console.log("---------------------------------------------------");
console.log("Do while loop");
/*
The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
*/
i = 0;
text ="";
do {
    text += i + " ";
    i++;
  }
  while (i < 10);
  console.log(text);
  // 0 1 2 3 4 5 6 7 8 9
a= 11;
text = "";
do{
    text = a + " ";
    a++;
}  
while(a<10);
console.log(text); //
// 11
