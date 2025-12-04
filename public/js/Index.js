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
  const slider = document.getElementById("brand-slider");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  // Ekranda nechta rasm ko‘rinishini aniqlash
  let visibleSlides = 4; // Desktop default
  if (window.innerWidth < 768) visibleSlides = 2; // Mobile
  else if (window.innerWidth < 1024) visibleSlides = 3; // Tablet

  index++;

  if (index > totalSlides - visibleSlides) {
    index = 0;
  }

  // Har bir rasm qancha foiz joy olishini hisoblash
  const movePercent = 100 / visibleSlides;

  slider.style.transform = `translateX(-${index * movePercent}%)`;
}

// Har 3 soniyada siljish
setInterval(slider, 3000);