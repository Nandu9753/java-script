// flat function 
// Flattening an array is the process of reducing the dimensionality of an array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
console.log("------------------------------------------------------");
console.log("flat function")
let myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat()); // reduce array
// [1,2,3,4,4]
let a = [[13,55,[777],55],66];
console.log(a);
// [Array(4), 66]
console.log(a.flat());
// [13, 55, Array(1), 55, 66]
console.log(a.flat().flat());
// [13, 55, 777, 55, 66]

console.log("------------------------------------------------------")
console.log("splice function")
// splice() function
//The splice() method adds new items to an array.
//The slice() method slices out a piece of an array.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");  // first parameter is define a add element which position and second parameter is define how element remove
console.log(fruits);
// ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
fruits.splice(3,2,'lemon');
console.log(fruits);
// ['Banana', 'Orange', 'Lemon', 'lemon', 'Mango']
console.log(fruits.splice(0, 1)) // remove index 0 in array 
// ['Banana']

console.log("------------------------------------------------------");
console.log("slice function");
/* The slice() method slices out a piece of an array into a new array.
This example slices out a part of an array starting from array element 1 ("Orange"): */
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);    //  create a new array 
// ['Orange', 'Lemon', 'Apple', 'Mango']   
console.log(fruits); // exist array no change
// ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(fruits.slice(3,5));  // create  a new array of 3rd to 4th indexing from fruits array 
// ['Apple', 'Mango']
console.log(fruits.slice(-3));
// ['Lemon', 'Apple', 'Mango']
console.log(fruits.slice(-3,-1));
// ['Lemon', 'Apple']

console.log("------------------------------------------------------");
console.log("sort function");
// The sort() method sorts an array alphabetically:
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);  // sort to alphabetically
// ['Apple', 'Banana', 'Mango', 'Orange']
fruits.reverse();
console.log(fruits);
// ['Orange', 'Mango', 'Banana', 'Apple']
// numberic sort
/*    
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
*/
a = [40, 100, 1, 5, 25, 10];
a.sort();
console.log(a); // sorting result incorrect 
// [1, 10, 100, 25, 40, 5]
a= [40, 100, 1, 5, 25, 10];
a.sort(function(x,y){
    return x-y;
});
console.log(a);  // Ascending order  
// [1, 5, 10, 25, 40, 100]
a.sort(function(x,y){
    return y-x;
});
console.log(a);  //descending order
// [100, 40, 25, 10, 5, 1]
// Sorting an Array in Random Order
a.sort(function(){
    return 0.5 - Math.random();
});
console.log(a);
// random order in sorted array 
// The Fisher Yates Method for random sorted order
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(points);
// output in random sorted array

console.log("------------------------------------------------------");
console.log("max function");
//You can use Math.max.apply to find the highest number in an array:

b = [40, 100,5,1, 25, 10];
let maximum = Math.max.apply(null,b);
console.log(maximum);
// 100
console.log("------------------------------------------------------");
console.log("min function");
// You can use Math.min.apply to find the lowest number in an array:
let minimum = Math.min.apply(null,b);
console.log(minimum);
// 1
c= [2,3];
let min_value = Math.min(null,b);
console.log(min_value);
// NaN
let minimum_value = Math.min.apply(b); // two parameter required
console.log(minimum_value);  
// infinity

// Sorting Object Arrays
console.log("------------------------------------------------------");
console.log("sorting object array");
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
console.log(cars);  // array inside in define a object
// [{…}, {…}, {…}]
console.log(cars[0]);
// {type: 'Volvo', year: 2016}
// print a arary 
cars.forEach(element => {
    console.log(element);
});
/*   {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}   */
cars.sort(function(a,b){
    return a.year-b.year;
});
cars.forEach(element => {
    console.log(element);
});
/*   
{type:"Saab", year:2001},
{type:"BMW", year:2010} 
{type:"Volvo", year:2016},
      */
// Comparing string properties is a little more complex:

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });     
  cars.forEach(element => {
    console.log(element);
});
/*     
{type: 'BMW', year: 2010}
{type: 'Saab', year: 2001}
{type: 'Volvo', year: 2016}
*/

// Stable Array sort()
console.log("------------------------------------------------------");
console.log("Stable Array sort()");
myArr = [
    {name:"X00",price:100 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 },
    {name:"X08",price:120 },
    {name:"X09",price:120 },
    {name:"X10",price:120 },
    {name:"X11",price:120 },
    {name:"X12",price:130 },
    {name:"X13",price:130 },
    {name:"X14",price:130 },
    {name:"X15",price:130 },
    {name:"X16",price:140 },
    {name:"X17",price:140 },
    {name:"X18",price:140 },
    {name:"X19",price:140 }
  ];
  myArr.sort( (p1, p2) => {
    if (p1.price < p2.price) return -1;
    if (p1.price > p2.price) return 1;
    return 0;
  });
  let txt = ''
  myArr.forEach(value=>{
    txt += value.name + " " + value.price + "<br>";
  });
  console.log(txt);
  /*     
X00 100
X01 100
X02 100
X03 100
X04 110
X05 110
X06 110
X07 110
X08 120
X09 120
X10 120
X11 120
X12 130
X13 130
X14 130
X15 130
X16 140
X17 140
X18 140
X19 140
  */