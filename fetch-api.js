function FetchApi(){
let file = "https://dummy.restapiexample.com/api/v1/employees";
fetch (file)
.then(data => data.json())
.then(response => getEmp(response) );

const getEmp = (res) =>{
   
       console.log(res.status);
   
}
};