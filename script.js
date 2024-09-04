let slides=document.getElementsByClassName("slides");
let navlinks=document.getElementsByClassName("dot");
let currentSlide=0;

document.getElementById("next").addEventListener("click",()=>{
    changeSlide(currentSlide +1);
});
document.getElementById("prev").addEventListener("click",()=>{
    changeSlide(currentSlide -1);
});

function changeSlide(moveTo){
    if(moveTo >=slides.length){
        moveTo=0;
    }
    if(moveTo < 0){
        moveTo=slides.length -1;
    }
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("activeDot");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("activeDot");
    currentSlide=moveTo;

}


document.querySelectorAll(".dot").forEach((bullet,bulletIndex)=>{
    bullet.addEventListener("click",()=>{

        if(currentSlide!==bulletIndex){
            changeSlide(bulletIndex);
        }
    });
});

window.onload=setInterval(function(){
    changeSlide(currentSlide+1)
},3000);

function hello(){
    document.getElementById("usa").style.backgroundColor="red"
}
function Hello(){
    document.getElementById("usa").style.backgroundColor="#fff"
}
function ritu(){
    document.getElementById("cute").style.backgroundColor="red"
}
function Ritu(){
    document.getElementById("cute").style.backgroundColor="#fff"
}
function sanj(){
    document.getElementById("nice").style.backgroundColor="red"
}
function Sanj(){
    document.getElementById("nice").style.backgroundColor="#fff"
}

 function gre(){
    document.getElementById("div1").style.border="2px solid green";
      document.getElementById("divS").style.border="2px solid green";
      document.getElementsByClassName("search").style.backgroundColor="green";

}
function re(){
    document.getElementById("div1").style.border="2px solid red";
      document.getElementById("divS").style.border="2px solid red";
      document.getElementsByClassName("search").style.backgroundColor="red";

}
function orge(){
    document.getElementById("div1").style.border="2px solid orange";
    document.getElementById("div1").style.border="2px solid orange";
      document.getElementById("divS").style.border="2px solid orange";
      document.getElementsByClassName("search").style.backgroundColor="orange";

}
function blu(){
    document.getElementById("div1").style.border="2px solid blue";
      document.getElementById("divS").style.border="2px solid blue";
      document.getElementsByClassName("search").style.backgroundColor="blue";

}

document.getElementsByClassName("red").addEventListener('click',function()
{
var list=document.getElementById("search");
list.style.backgroundColor="red";
    
}
);
