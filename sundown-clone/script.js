const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// let a= document.querySelector("#elem1");
// let image=a.getAttribute("data-image");

let elemC=document.querySelector("#elem-container");
let fixedImage=document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixedImage.getAttribute("display")
    fixedImage.style.display="block"; 
});

elemC.addEventListener("mouseleave",function(){
    fixedImage.getAttribute("display")
    fixedImage.style.display="none"; 
});