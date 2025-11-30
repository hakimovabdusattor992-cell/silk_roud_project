const navToggle=document.querySelector(".nav-toggle")
const toggileBtn=document.querySelector(".toggile-btn")
const toggileBtnImg=document.querySelector(".toggile-btn__img")
const form = document.getElementById("registerForm");
const errorMsg = document.getElementById("errorMsg");

toggileBtn.addEventListener("click",()=>{
    navToggle.classList.toggle('show-tg')
    if(navToggle.classList.contains('show-tg')){
        toggileBtnImg.src='../img/close.png'
    }else{
      toggileBtnImg.src='../img/list.png'  
    }
})



  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const role = document.getElementById("role").value;

    if (!role) {
      errorMsg.textContent = "Please select your role";
      document.getElementById("role").style.border = "1.5px solid red";
      return;
    }

    errorMsg.textContent = "";
    document.getElementById("role").style.border = "1px solid #ccc";

    alert("Form submitted successfully!");
  });
