const $ = document

const scrollToTopBtn = $.querySelector('#scrollToTopBtn'),
openNavbarMenuBtn = $.querySelector('.open__navbar__menu__btn'),
navbarMenu = $.querySelector('.navbar-menu'),
closeNavbarMenu = $.querySelector('.close__navbar__menu')

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})


let isNavbarActive = false

openNavbarMenuBtn.addEventListener('click', () => {
    if (isNavbarActive) {
        isNavbarActive = false
        navbarMenu.classList.remove('active-navbar')

    } else {
        isNavbarActive = true
        navbarMenu.classList.add('active-navbar')
    }
})

closeNavbarMenu.addEventListener('click', () => {
    isNavbarActive = false
    navbarMenu.classList.remove('active-navbar')
})
