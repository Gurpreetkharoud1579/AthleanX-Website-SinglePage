burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-nav');


burger.addEventListener('click',  ()=>{
    navlist.classList.toggle('v-bar');
    rightNav.classList.toggle('v-bar');
    navbar.classList.toggle('h-bar');
})