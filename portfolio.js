
var typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "Data Analyst"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

hamburger= document.querySelector(".hamburger");
hamburger.onclick= function() {
    navBar= document.querySelector(".nav-links");
    navBar.classList.toggle("active");
}