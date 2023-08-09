console.log("if Condition")
const age = 23;
// if condition
if(age>=18){
    console.log("You Are Eligible For Vote");
}else{
    console.log("You Are Not Eligibel");
}
console.log("-----------------------------------------------");
console.log("if else if condition");
// if else if condition
const marks = 45;
if(marks>=60){
    console.log("First Division");
}else if(marks>=33){
    console.log("second Division");
}else{
    console.log("Fail");
}

console.log("-----------------------------------------------");
console.log("switch condition");
const  day = new Date().getDay();
let name = '';
switch(day){
    case 0 : 
     name = "Sunday";
     break;
    case 1 : 
     name = "Monday"; 
     break;
     case 2 : 
     name = "Tuesday";
     break;
     case 3 : 
     name = "Wednesday";
     break;
     case 4 : 
     name = "Thursday";
     break;
     case 5 : 
     name = "Friday";
     break;
     case 6 : 
     name = "Suturday";
     break; 

}
console.log(name);