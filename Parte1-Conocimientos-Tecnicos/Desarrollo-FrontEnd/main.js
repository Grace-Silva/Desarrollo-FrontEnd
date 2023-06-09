let menu = document.querySelector('#bars-Menu');

let navlinks = document.querySelector('.navLinks');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
}