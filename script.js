const links = document.querySelectorAll('.header__link')
const hamburger = document.getElementById('hamburger')

links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        hamburger.checked = false;
    })
})

// open nav
function openNav(){
    const navElems = document.getElementsByClassName('header__nav')
    navElems[0].style.width = '100%'
    
    const closeNav = document.getElementsByClassName('closeBtn')
    closeNav[0].style.display = 'block'
}

// close nav
function closeNav(){
    const navElems = document.getElementsByClassName('hamburger__check')
    navElems[0].checked = false
    
    const closeNav = document.getElementsByClassName('closeBtn')
    closeNav[0].style.display = 'none'
}