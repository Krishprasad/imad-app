console.log('Loaded!');
//change the text
var element=document.getElementById("one");
element.innerHTML="new Change";
//move image
var img=document.getElementById("pic");
img.onclick=function(){
    img.style.marginLeft="100px";
};