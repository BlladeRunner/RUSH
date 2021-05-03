const activeMenu = document.getElementByC('')
const inactiveMenu = document.getElementById('')
const navbar = document.getElementById('nav')

activeMenu.addEventListener(click, toggle)

function toggle() {
    navbar.style.display = "none"
}
