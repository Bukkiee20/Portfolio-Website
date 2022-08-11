
var typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "Data Analyst"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

hamburger= document.querySelector(".hamburger");
navBar= document.querySelector(".nav-links");
hamburger.onclick= function() {
  navBar.classList.toggle("active");
}

// document.onclick= function(e){
//   if(e.target.id !== "hamburger" && e.target.id !== "navBar"){
//     navBar.classList.remove("active");
//   }
// }
