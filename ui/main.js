//submit username/password to login
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    //make request to the server and send the name
     var request=new XMLHttpRequest();
    //capture the response and store it as a variable
    request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        //take some action
    if(request.status===200) {
    //capture the list of names and render it as list
   alert("logged in successfully");
} else if(request.status === 403){
    alert("username/password is incorrect");
} else if(request.status === 500){
    alert("something wrong in server");
}
}
};
//make the request
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
console.log(username);
console.log(password);
request.open('POST','http://shreekrishprasad.imad.hasura-app.io/login', true);
request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({username:username, password:password}));
};    