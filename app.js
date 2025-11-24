const navToggle=document.querySelector(".nav-toggle")
const toggileBtn=document.querySelector(".toggile-btn")
const toggileBtnImg=document.querySelector(".toggile-btn__img")

toggileBtn.addEventListener("click",()=>{
    navToggle.classList.toggle('show-tg')
    if(navToggle.classList.contains('show-tg')){
        toggileBtnImg.src='../img/close.png'
    }else{
      toggileBtnImg.src='../img/list.png'  
    }
})
