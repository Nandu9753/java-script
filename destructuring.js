/*   
Destructuring
We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed.

*/
// Destructing Arrays
let [x,y] = [3,5];
console.log(x,y)
// 3 5

console.log("Destructing Arrays")
const vehicles = ['mustang', 'f-150', 'expedition'];
let [a,b,c] = vehicles;
console.log(a,b,c);
// mustang f-150 expedition
const arr1 = [1,2,3,4,5,6,7,8];
let [num1,num2,...num3] = arr1;
console.log(num1,num2,num3)
// 1 2 [3, 4, 5, 6, 7, 8]
console.log('--------------------------------------------');
console.log("destructing object");
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}
myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  console.log(message);
}
const user  = {
    name:"Ram",
    company:"Hk",
    designation:"Software Engineer",
}
let {name:myname,company} = user;
console.log(myname,company);
user.address ={
    city:"bhopal",
    state:"mp",
    country:"india",
} ;
console.log(user);
/* 
{
    name:"Ram",
    company:"Hk",
    designation:"Software Engineer",
    address : {
    city:"bhopal",
    state:"mp",
    country:"india",
}
}

*/
let address;
({name,company,address:{state}} = user);
console.log(name,state);
// Ram mp

console.log('--------------------------------------------');
console.log("destructing in function");
function calculate(a,b){
    const add = a+b;
    const subtract = a-b;
    const mul  = a * b;
    const div = a/b;
    return [add,subtract,mul,div];
};
const [add,subtract,mul,div]  = calculate(75,5);
console.log("add number:"+add);
console.log("sub number:"+subtract);
console.log("mul number:"+mul);
console.log("div number:"+div);
