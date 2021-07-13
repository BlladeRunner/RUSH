const activeMenu = document.querySelector('.open-menu')
const navbar = document.getElementById('nav')
let closed = true;


activeMenu.addEventListener('click', () => toggle())

function toggle() {
    closed = !closed
    if(closed) {
        navbar.style.display = "none"
    } else if(!closed) {
        navbar.style.display = "block"        
    } 
}