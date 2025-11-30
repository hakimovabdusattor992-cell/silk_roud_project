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

let index = 0;

function slider() {
  const slides = document.querySelectorAll("#brand-slider .slide");
  index++;

  if (index >= slides.length) index = 0;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

setInterval(slider, 3000);



