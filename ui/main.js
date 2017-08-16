//Counter code
var button= document.getElementById("counter");

button.onclick=function(){
    //create a request object
    var request=new XMLHttpRequest();
    //capture the response and store it as a variable
    request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        //take some action
    if(request.status===200) {
        var counter=request.responseText;
        var span = document.getElementById("count");
        span.innerHTML=counter.toString();
    }
    }
    };
    //make the request
    request.open('GET','http://shreekrishprasad.imad.hasura-app.io/counter', true);
    request.send(null);
};

//submit a name
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
    var names=request.responseText;
    var list="";
    for(var i=0;i<names.length;i++){
        list+="<li>" +names[i]+ "</li>";
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
}
}
};
var nameInput=document.getElementById("name");
var name=nameInput.value;
request.open('GET','http://shreekrishprasad.imad.hasura-app.io/submit-name?name=' + name, true);
request.send(null);
}    