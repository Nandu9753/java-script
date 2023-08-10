function FetchApi(){
let file = "https://dummy.restapiexample.com/api/v1/employees";
fetch (file)
.then(data => data.json())
.then(response => getEmp(response) );

const getEmp = (res) =>{   
            console.log(res);
   
}
};

function postData(){
    data = 	{"name":"test67676","salary":"123","age":"23"}
    params = {
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }
    let url = "	https://dummy.restapiexample.com/api/v1/create";
    fetch (url,params).then(response => response.json()).then(res => console.log(res));
}