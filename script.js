const activeMenu = document.querySelector('.toggle-menu-active')
const inactiveMenu = document.querySelector('.toggle-menu-inactive')
const navbar = document.getElementById('nav')

document.addEventListener('click', toggle)

function toggle() {
    if(navbar === inactiveMenu) {
    navbar.style.display = "block"
    // navbar.style.transition = "width 5s"
}   else {
    navbar.style.display = "none"
    } 
}