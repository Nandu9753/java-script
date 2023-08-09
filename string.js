let a = "hello";
// a = hello // not declared
console.log(a);
a = "How Are You";
console.log(a);
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer2);
console.log(answer3);
let text = "We are the so-called \"Vikings\" from the north."; // The sequence \"  inserts a double quote in a string
console.log(text);
a= "Hacker Kernel"; // type  of string
// find a length of string
console.log(a.length);  // 13
let b = new String("Hacker Kernel"); // type of object
console.log(b); // strings can also be defined as objects with the keyword new:
// String Function
// slice function 
console.log("--------------------------------------------------------------------------------");
console.log("Slice Function");
a = "Apple, Banana, Kiwi";
console.log(a.slice(7, 13)); //include a first position but not include a last position 
// output - banana
console.log(a.slice(7));
// banana, kiwi
console.log(a.slice());
// Apple, Banana, Kiwi
console.log(a.slice(-12));  // counting of string from behind
// banana, kiwi
console.log(a.slice(7,-6));
// banana
console.log(a.slice(-12,-6));
// banana


// substring
// The difference is that start and end values less than 0 are treated as 0 in substring().
console.log("--------------------------------------------------------------------------------");
console.log("substring Function");
a = "Apple, Banana, Kiwi";
console.log(a.substring(7,13));
// banana
console.log(a.substring(-12,7))  // start and end values less than 0 are treated as 0
// Apple;

// substr
// The difference is that the second parameter specifies the length of the extracted part.
console.log("--------------------------------------------------------------------------------");
console.log("substr Function");
a = "Apple, Banana, Kiwi";
console.log(a.substr(7,13)); // second parameter specifies the length
// banana, Kiwi
console.log(a.substr(-12,7))  // s
// Banana;
console.log(a.substr(-12,-4));
// null  because second parameter is a less than 0
console.log("--------------------------------------------------------------------------------");
console.log("replace Function");
// replace function
// replace function create a new string
text = "Please visit Microsoft and Microsoft!";
console.log(text.replace("Microsoft","TCS"));  // only first word replace
//Please visit TCS and Microsoft!
console.log(text.replace("microsoft","TCS")); // no changes
console.log(text.replace(/MICROSOFT/i,"TCS"));  // regular expression value change of upper and lower case
// Please visit TCS and Microsoft!
console.log(text.replace(/microsoft/i,"TCS"));
// Please visit TCS and Microsoft!
console.log(text.replace(/Microsoft/g,"TCS"));  // all word match to  replace and create new string
// Please visit TCS and TCS!
console.log("--------------------------------------------------------------------------------");
console.log("replaceAll() Function");
// replace all function 
// JavaScript introduced the string method replaceAll():
console.log(text.replaceAll("Microsoft","TCS"));  // all microsoft word to replace 
// Please visit TCS and TCS!
console.log(text.replaceAll(/microsoft/g,"TCS")); 

console.log("--------------------------------------------------------------------------------");
console.log("upper case Function");
// upper and lower case 
text = "Hello World!";
console.log(text.toUpperCase());   // sentence all word convert to upper case
// HELLO WORLD!


console.log("--------------------------------------------------------------------------------");
console.log("lower case Function");
// upper and lower case 
text = "Hello World!";
console.log(text.toLowerCase());  // sentence all word convert to lower case
// hello world!

console.log("--------------------------------------------------------------------------------");
console.log("concat Function");
// concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World!";
console.log(text1.concat(" " ,text2));
// Hello World!
console.log(text2.concat("," ,text1));
// World!,Hello
console.log(text1.concat(' ',text2,',',text));  // three string concat
// Hello World!,Hello World!

console.log("--------------------------------------------------------------------------------");
console.log("trim Function");
// The trim() method removes whitespace from both sides of a string:
text1 = "      Hello World!      ";
console.log(text1.trim());   // remove spaces
// Hello World!
console.log(text1.trimStart());  // The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// Hello World!
console.log(text1.trimEnd()); //The trimStart() method works like trim(), but removes whitespace only from the End of a string.
//     Hello World!

console.log("--------------------------------------------------------------------------------");
console.log("padStart Function");
// It pads a string with another string (multiple times) until it reaches a given length.
a = "5";
console.log(a.padStart(5,0));
// 00005
console.log(a.padStart(6,'X'));
// XXXXX5
console.log(a.padStart(3));  // if second parameter not pass then take a space 
//    5 

console.log("--------------------------------------------------------------------------------");
console.log("padEnd Function");
// It pads a string with another string (multiple times) until it reaches a given length.
a = "5";
console.log(a.padEnd(5,0));
// 50000
console.log(a.padEnd(6,'X'));
// 5XXXXX
console.log(a.padEnd(3));  // if second parameter not pass then take a space 
//5 
