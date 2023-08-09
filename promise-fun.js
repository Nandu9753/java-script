/*
"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code
*/
function PromiseFun(){
console.log("promise function ")
const myFunction = function(some){
    console.log(some);
}
const myPromise = new Promise(function(resolve,reject){
    x=0;
    if(x != 0){
            resolve('success');
    }else{
        reject("not fetch data");
    } 
});
myPromise.then(myFunction).catch(function(error){
    console.log("some error  "+ error);
});
const userPost=new Promise(function(resolve,reject){
        let req = new XMLHttpRequest();
        req.open('GET', "https://jsonplaceholder.typicode.com/posts");
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject("File not Found");
            }
        };
        req.send();
            });

function getUserPost(results){
    let result = JSON.parse(results);
    result.forEach(element => {    
        console.log(element.title);
    });
};
userPost.then(function(value){getUserPost(value);},function(error){console.log(error)});
}