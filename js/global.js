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

// ----------------------- Menu Mobile -----------------------

const navbarMenuItems = $.querySelectorAll('.navbar__menu__item')
let activeSubMenu = null

navbarMenuItems.forEach(navbarMenuItem => {
    navbarMenuItem.addEventListener('click', function () {
        navbarMenuItem.lastElementChild.classList.toggle('navbar-sub-menu--active')
        activeSubMenu = navbarMenuItem.lastElementChild
    })
})

document.addEventListener('click', e => {
    if (activeSubMenu && !['UL', 'LI', 'A'].includes(e.target.tagName)) {
        activeSubMenu.classList.remove('navbar-sub-menu--active')
        activeSubMenu = null
    }
})