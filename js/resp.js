burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-nav');
youtube = document.getElementById('youtube');

burger.addEventListener('click',  ()=>{
    navlist.classList.toggle('v-bar');
    rightNav.classList.toggle('v-bar');
    navbar.classList.toggle('h-bar');
})
youtube.addEventListener('click',  ()=>{
    location.href = "https://www.youtube.com/c/athleanx";
})


btns = document.getElementsByClassName("watchVideo");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      location.href = "https://www.youtube.com/watch?v=G-rS3GFslts";
    });
}