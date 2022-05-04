function validateLogin(){
  //XMLHttpRequest
  // console.log("CLICKED!!");
  // const request = new XMLHttpRequest();
  // request.open("GET","https://jsonplaceholder.typicode.com/todos");
  // request.send();
  // request.onload=()=>{
  //   console.log(request.status)
  // };
  //Fetch API method
  // console.info("Logging now fetch API");
  // const url = "https://jsonplaceholder.typicode.com/todos";
  // fetch(url,{method:'GET'})
  // .then(response=>{return response.json()})
  // .then(json=>{
  //   console.log(json);
  // });
  //Alternative method to call using fetch api
// async function getUsers(){
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   let data = await response.json();
//   return data;
// }
// getUsers().then(response=>console.log(response));

//Axios library for making requests
// axios.get('https://jsonplaceholder.typicode.com/todos').
// then(response=>console.log(response.data),err=>console.log(err));

//Jquery ajax call
$.ajax({
  type: "GET",
  url: "https://jsonplaceholder.typicode.com/todos",
  success: function (response) {
    console.log("SUCCESS!");
    console.log(response);
  },
  error:function(error){
    console.log("Error!");
  }
});
}

