document.getElementById("open-menu-button").addEventListener("click", function() {
  openSlide();
});

document.getElementById("close-menu-button").addEventListener("click", function() {
  closeSlider();
});



function openSlide() {
  const menu = document.getElementById("menu");
  menu.classList.remove("hidden");
  menu.classList.add("visible");
}


function closeSlider() {
  const menu = document.getElementById("menu");
  menu.classList.remove("visible");
  menu.classList.add("hidden");
}


// stricky nav 
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 130) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
});


//nav item dynamic class added
const navAnchorTag = document.querySelectorAll(".nav-links a");
navAnchorTag.forEach((item)=>{
  item.classList.add("nav-menu")
})
