//variable initialisation


var btn=document.querySelector(".btn");
var email=document.querySelector(".email");
var message=document.querySelector(".message-holder");
var errorIcon=document.querySelector(".icon-error");


//adding animation on load
var timeline = gsap.timeline({ defaults: { duration: 1.5 }})
timeline
  .from('.big_heading_item', { y: '-100vh', stagger: .8 })
  .from('.content_container_item', { opacity: 0, stagger: .5 })
  


btn.addEventListener("click",function (){
   
    var emailValue=email.value;
    validateEmail(emailValue);
    
});
email.addEventListener("keyup",function(e){
   
  
        if(e.keyCode === 13 ){
            var emailValue=email.value;
            validateEmail(emailValue)
    }});



//rest function

function restStyle(){
    message.classList.remove("error");
    message.classList.remove("succs");
    errorIcon.style.visibility="hidden";
}
// email verification 
function validateEmail(inputText){
    //first lets rest all the styles to the defaults
    restStyle();
 mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if(mailformat.test(inputText)){
    
 
  

message.innerHTML="Success! You've been added to the audience.";
message.classList.add("sucss");
setTimeout(function(){
    location.reload();
    return false;
},6000);


return true;
}else{
email.style.borderColor=" hsl(0, 93%, 68%)";
message.innerHTML="Please provide a valid email address";
message.classList.add("error");
errorIcon.style.visibility="visible";
return false;
}
}
