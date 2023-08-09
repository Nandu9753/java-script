/*        JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).
*/
console.log("Normal function");

// function create 
function sum(a,b){
    console.log(a+b);
}
sum(4,4);  // function call 
console.log('----------------------------------------');
console.log("Function return ");
// Function Return 
function mul(a,b,c){
  return a*b*c;
}
console.log(mul(8,9,7));
console.log('----------------------------------------');
console.log("default parameter declare in function  ");
const div = function(a,b=2){
    return a/b;
}
console.log(div(12,3));
// 4
console.log(div(12));   // get a default of b 
// 6

console.log('----------------------------------------');
console.log("function declare in variables ");
// function declare in variable
const big = function(a,b){
    if(a>b){
        return "a Is greater than b";
    }else{
        return "b Is greater than a";
    }
}
console.log(big(5,8));
console.log('----------------------------------------');
console.log("block scope in function ")
// variable declare in function 
let a = 45;
let b = 67;
let c = 44;
let d = 12;
function add(){
    let a = 20;
    let b = 30;
    let c = 55;
    d = 50;
    console.log("add =",a+b);  // 50
    console.log("fun inside c =",c);  // 55
}
add();
console.log("d =",d)  // 50;
console.log("fun out c=",c);  // 44
console.log("add =",a+b);  // 112 block level scope

console.log('----------------------------------------');
console.log("object  in function declare");
const user = {
    first_name:"tony",
    last_name : "stark",
    full_name:function(){
        return (this.first_name+ " " +this.last_name).toUpperCase();
    }
}
console.log(user.full_name());