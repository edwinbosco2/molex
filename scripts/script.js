const menuBtn=document.querySelector(".menuBtn");
const menuBar=document.querySelector(".menuBarCon");

menuBtn.addEventListener('click',()=>{
    if(menuBar.style.display == "none"){
        menuBar.style.display="block";
    }
})