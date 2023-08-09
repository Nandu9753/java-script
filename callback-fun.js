console.log('Callback function');
/*
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

*/


const students = [{
    name:"ram",
    age:25,
    city:"bhopal",
},{
    name:"shyam",
    age:23,
    city:"Indore",
}
]
function setStudents(student,callback){
    setTimeout(function() {
        students.push(student);
        console.log("---------------------------------------------------------------");
        console.log("Student Get");
        callback();
    }, 3000);
}
function getStudents(){
    setTimeout(function() {
        students.forEach(function(student){
            console.log(student.name,student.age);
        })     
    }, 1000);
}
let newStudent = {
    name:"mohan",
    age:27,
    city:"Hyd",
}
setStudents(newStudent,getStudents);   // getStudents is a callback function 
console.log("---------------------------------------------------------------");
console.log("add two number");
// calculate a number
const  displayAnswer = function (result){
    console.log(result);
};
const calculate = function(a,b,call){
    sum = a+b
    call(sum);
};
calculate(4,6,displayAnswer);

// Get a positive number
console.log("---------------------------------------------------------------");
console.log("array in get a positive number");
const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const positive = removeNegitive(myNumbers,(x) => x >=0);
function removeNegitive(myNumbers,callback){
    let posArray = [];
    for(let x of myNumbers){
        if(callback(x)){
            posArray.push(x);
            
        }
    }
    return posArray;
}
console.log(positive);
// set interval
console.log("---------------------------------------------------------------");
    console.log("Set interval");
const DateTime = function(){
    let date = new Date();
    console.log(date);
}
setTimeout(IntervalFun,4000);
function IntervalFun(){
    setInterval(DateTime,1000);
}
