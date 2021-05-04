const activeMenu = document.querySelector('.toggle-menu-active')
const inactiveMenu = document.querySelector('.toggle-menu-inactive')
const navbar = document.getElementById('nav')

document.addEventListener('click', toggle)

function toggle() {
    if(navbar === activeMenu) {
    navbar.style.display = "block"
} else {
    navbar.style.display = "none"
    } 
}