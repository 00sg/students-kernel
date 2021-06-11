 const slidePage=document.querySelector(".slidepage");
 const firstNextBtn=document.querySelector(".NextBtn");
 const prevBtnSec=document.querySelector(".prev-1");
 const nextBtnSec=document.querySelector(".next-1");
 const prevBtnthird=document.querySelector(".prev-2");
 const submitBtn=document.querySelector(".submit");
 const progressText=document.querySelectorAll (".step p");
 const progressCheck=document.querySelectorAll (".step .check");
 const bullet=document.querySelectorAll (".step .bullet");
 let max=4;
 let current=1;

 firstNextBtn.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current+=1;
 });

 nextBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current+=1;
 });

 prevBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current-=1;
 });
 prevBtnthird.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current-=1;
 });

submitBtn.addEventListener("click",function(){
   bullet[current - 1].classList.add("active");
   progressText[current - 1].classList.add("active");
   progressCheck[current - 1].classList.add("active");
   current+=1;
   setTimeout(function(){
      alert("registration successfull");
      window.location.href="feed.html";
   },800);
});

function btnfunc(){
   setTimeout(function(){document.location.href ="feed.html"},500);
   alert("registration successfull");
}
