
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const mainContent = document.querySelector(".mainContent");



hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  mainContent.classList.toggle("active");



 
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  mainContent.classList.remove("active")



}






// const osbserver = new IntersectionObserver((entries) =>{
//   entries.forEach((entry) =>{

//     console.log(entry)

//     if(entry.isIntersecting){
//       entry.target.classList.add('show')
//     }else{
//       entry.target.classList.remove('show')
//     }



//   });
// });

// const hiddenElement = document.querySelectorAll('.hidden')


// window.onscroll = function (e) {  
//   // called when the window is scrolled.  
//   hiddenElement.forEach((el) => osbserver.observe(el));
//   } 
