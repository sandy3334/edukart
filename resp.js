burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.leftnav')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('nav-h')
    leftnav.classList.toggle('nav-v')
    rightnav.classList.toggle('nav-v')

})