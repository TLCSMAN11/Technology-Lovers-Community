// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika menu di klik
document.querySelector('#menu'). onclick = () =>{
    navbarNav.classList.toggle('active');

}

// ketika klik di luar sidebar menu bisa ketutup
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
} );
