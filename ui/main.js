//Counter code
var button= document.getElementById("counter");

button.onclick=function(){
    //create a request object
    var request=new XmlHttpRequest();
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