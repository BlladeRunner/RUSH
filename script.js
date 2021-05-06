// const activeMenu = document.querySelector('.toggle-menu-active')
const activeMenu = document.querySelector('.open-menu')
const navbar = document.getElementById('nav')

document.addEventListener('click', toggle)

console.log("toggled")

function toggle() {
    if(navbar !== activeMenu) {
        navbar.style.display = "block"
    // navbar.style.transition = "width 5s"
}   if(navbar === activeMenu) {
        navbar.style.display = "none"
    } 
}