
// Toggle Menu
let barIcon = document.querySelectorAll('.bar-icon')[0]
let toggleClass = document.querySelectorAll('header ul')[0]

barIcon.addEventListener('click',()=>{
    toggleClass.classList.toggle('nav-active')
})