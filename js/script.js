document.addEventListener('DOMContentLoaded', function(){

const nav = document.querySelector('.navbar');

function addShadow () {
    if(window.scrollY >= 150) {
        nav.classList.add('shadow-bg');
    } else {
        nav.classList.remove('shadow-bg');
    }
}

window.addEventListener('scroll', addShadow)
})

const allNavLinks = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.navbar-collapse');

allNavLinks.forEach(link => link.addEventListener('click', ()=> navList.classList.remove('show')))