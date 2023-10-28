const navBtn = document.querySelector('.fa-bars')
const outergrid = document.querySelector('.outergrid')
const nav = document.querySelector('.nav')
navBtn.onclick = function () {
    outergrid.classList.toggle('outergrid-expanded')
    nav.classList.toggle('hide-nav')
    
}