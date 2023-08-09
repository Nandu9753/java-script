
// let variables
let a = 12;
//let a =55; // let not redeclared
a = 55;
console.log(a);
/*  let seprated redeclared in block        */
{ 
    let a = 33;   // if block in no redeclare a then output = 55  
    console.log(a); // output 33
}
console.log(a) // output = 33
{
    a = 66; // value changes posible
}
console.log(a)   // output 66

// const variable
const b = 55;
// const b = 44; //const no redeclared 
//b = 44; // const variable not change value
// block in const variables
{
    const b = 11;
    console.log(b); // 11
}
console.log(b);
{
   // b = 5; // show a error
}
console.log(b);

const c = {
    "name":"narendra",
    "company":"hK",
    "city":"bhopal"
}
console.log(c);
// const variable in object key value change;
c['name'] = "lakhan";
console.log(c); // narendra replace to lakhan
console.log(c.city); // bhopal

// var variable 
var name = "narendra";
console.log(name);
var name = "lakhan"; // redeclared posible
console.log(name);
//let name = "mithlesh"; // show a error- already declared 
console.log(name);


// const,let and var 
const d = 33;
let e = 55;
var f = d+e;
console.log(f); // 88
