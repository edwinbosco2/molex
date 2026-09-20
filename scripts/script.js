const menuBtn = document.querySelector(".menuBtn");
const menuBar = document.querySelector(".menuBarCon");


menuBtn.addEventListener('click',()=>{
    const menubar=window.getComputedStyle(menuBar);
    if(menubar.display === "none"){
        menuBar.style.display = "block";
    }else{
        menuBar.style.display= "none";
    }
});

document.addEventListener('click',(e)=>{
    if(!menuBar.contains(e.target) && !menuBtn.contains(e.target)){
        menuBar.style.display="none";
    }
})
