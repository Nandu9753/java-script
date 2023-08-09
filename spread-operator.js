/*
Spread Operator
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

*/
console.log("Array in use a spread operater");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2,8,9];
console.log(arr3);  //  array combine
// [1, 2, 3, 4, 5, 6,8,9]
let arr4 = arr1;
console.log(arr4);
arr4.push(4,5);  // but arr1 also added
console.log(arr4); 
// [1, 2, 3, 4, 5]
console.log(arr1);  // arr1 value changes
// [1, 2, 3, 4, 5]
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr4  = [...arr1,4,5];
console.log(arr4);
// [1, 2, 3, 4, 5]
console.log(arr1);   // No changes
// [1, 2, 3]
let num = [1,2,3,4,5,6,7,8];
let [a,b,c] = [...num];
console.log(a);  // 1
console.log(b);   // 2
console.log(c);   // 3
[a,b,...c] = num;
console.log(c);  // [3, 4, 5, 6, 7, 8]

console.log("--------------------------------------------------------");
console.log("object in use a spread operator");
let  obj1 = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
let obj2 = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
let obj3  = {...obj1,...obj2};
console.log(obj3);   // color key value updated
// {brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021}
let {brand,model,color} = obj1;   // Destructing method
console.log(brand,model,color);
// Ford Mustang red

console.log("--------------------------------------------------------");
console.log("function  in use a spread operator");
function sum(a,b,c,d){
    return a+b+c+d;
}
let numbers = [1,2,3,4];
console.log(sum(...numbers));
// 10
const check = function(a,b,...c){
    const otp = "typeof c: "+typeof c + " " + "and" +" " + "c:"+c;
    return otp;
}
console.log(check(1,2,3,4));
// typeof c: object and c:3,4