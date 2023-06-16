import {courseData} from './utils/database.js'

let $ = document

const lastestCoursesContainer = $.querySelector('#lastestCoursesContainer'),
articleContainer = $.querySelector('#articleContainer')


let courseArray = courseData.slice(0, 6)

let articleDataArray = [
    {src: 'image/article_cover/456e7b.jpg', title: 'ورود به دنیای آنلاین؛ راهی برای افزایش فروش'},
    {src: 'image/article_cover/2ddc2d.jpg', title: 'بازاریابی حسی راهی ساده و کم هزینه برای افزایش فروش '},
    {src: 'image/article_cover/22b801.jpg', title: 'چگونه با نیچ مارکتینگ درآمد بالایی داشته باشیم؟'},
    {src: 'image/article_cover/518b4b.jpg', title: 'نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود'},
    {src: 'image/article_cover/587214.jpg', title: 'راه‌های جذب مشتری با تبلیغات دهان به دهان '},
    {src: 'image/article_cover/7d929a.jpg', title: 'از کجا مشتری پیدا کنم؟ راه‌های پیدا کردن مشتری'},
]


function addCoursesToDom () {
    let coursesHtmlTemplate = ''
    
    courseArray.forEach(course => {
        coursesHtmlTemplate += `<a href="/course.html?id=${course.id}" class="lastest-courses-slider-slide fi-sb swiper-slide">
        <div class="lastest-courses-cover-wrapper">
            <img src="${course.cover}" alt="cover" class="lastest__courses__cover">
        </div>
        <div class="lastest-courses-slider-slide-items fi">
            <div class="lastest-courses-slider-titles fi">
                <div class="lastest__courses__s__text">برنامه نویسی</div>
                <h4 class="lastest__courses__slider__title">${course.title}</h4>
            </div>
            <div class="lastest-courses-slider-infos">
                <div class="lastest-courses-slider-box">
                    <div class="lastest__courses__slider__box__icon">
                        <svg><use xlink:href="#chalkboard-user"></use></svg>
                    </div>
                    <div class="lastest-courses-slider-box-data">
                        <div class="lastest__courses__s__text">مدرس آموزش</div>
                        <div class="lastest__courses__data__text">محمد معین مهرانی</div>
                    </div>
                </div>
                <div class="lastest-courses-slider-box">
                    <div class="lastest__courses__slider__box__icon">
                        <svg><use xlink:href="#language"></use></svg>
                    </div>
                    <div class="lastest-courses-slider-box-data">
                        <div class="lastest__courses__s__text">زبان آموزش</div>
                        <div class="lastest__courses__data__text">فارسی</div>
                    </div>
                </div>
                <div class="lastest-courses-slider-box">
                    <div class="lastest__courses__slider__box__icon">
                        <svg><use xlink:href="#time"></use></svg>
                    </div>
                    <div class="lastest-courses-slider-box-data">
                        <div class="lastest__courses__s__text">مدت زمان آموزش</div>
                        <div class="lastest__courses__data__text">180 ساعت</div>
                    </div>
                </div>
                <div class="lastest-courses-slider-box">
                    <div class="lastest__courses__slider__box__icon">
                        <svg><use xlink:href="#soap"></use></svg>
                    </div>
                    <div class="lastest-courses-slider-box-data">
                        <div class="lastest__courses__s__text">نوع تدریس</div>
                        <div class="lastest__courses__data__text">آنلاین / دانلودی</div>
                    </div>
                </div>
                <div class="lastest-courses-slider-box fi-sb">
                    <div class="lastest__courses__price">${course.price === 'free' ? 'رایگان' : `${course.price} <span>تومان</span>`}</div>
                    <div class="lastest-courses-students-data fi">
                        <div class="lastest-courses-student-like fi">
                            <p>60%</p>
                            <span>رضایت</span>
                        </div>
                        <div class="lastest-courses-student-count fi">
                            <p>33</p>
                            <span>دانشجو</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>`
    })

    lastestCoursesContainer.insertAdjacentHTML('beforeend', coursesHtmlTemplate)
}

function addArticleToDom () {
    let articlesHtmlTemplate = ''

    articleDataArray.forEach(data => {
        articlesHtmlTemplate += `<div class="article-box">
        <div class="article-header">
            <div class="article-date">
                <span>12</span>
                <span>آذر</span>
            </div>
            <div class="article__title">${data.title}</div>
        </div>
        <div class="article-cover-wrapper">
            <img src="${data.src}" alt="cover" class="article__cover">
        </div>
    </div>`
    })

    articleContainer.insertAdjacentHTML('beforeend', articlesHtmlTemplate)
}

// ----------------------- dark mode handeling -----------------------

const darkModeBtns = $.querySelectorAll('.darkModeBtn')
const rootElement = $.querySelector(':root')
const brandLogos = $.querySelectorAll('.logo')

let isDarkMode = false

function darkModeEnable () {
    rootElement.style.cssText = '--white-color: #1A1D1F; --text-color-main: #fff; --text-color-second: #BABABA;'
    $.body.classList.add('dark')
    brandLogos.forEach(logo => logo.setAttribute('src', 'image/logo_white.png'))
}

function darkModeDisable () {
    rootElement.style.cssText = '--white-color: #fff; --text-color-main: #4b515a; --text-color-second: #868686;'
    $.body.classList.remove('dark')
    brandLogos.forEach(logo => logo.setAttribute('src', 'image/logo.png'))
}

function darkModeHandel (darkModeBtn) {
    if (isDarkMode) {
        darkModeBtn.classList.remove('active-dark-mode')
        darkModeDisable()
    }
    else {
        darkModeBtn.classList.add('active-dark-mode')
        darkModeEnable()
    }
    isDarkMode = !isDarkMode
}


darkModeBtns.forEach(darkModeBtn => {
    darkModeBtn.addEventListener('click', () => {
        darkModeHandel(darkModeBtn)
    })
})


// ----------------------- click event handeling -----------------------

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


window.addEventListener('load', () => {
    addCoursesToDom()
    addArticleToDom()
})

// ----------------------- library initialize -----------------------

let groupingCoursesSlider = new Swiper('.grouping-courses-slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {  
        '0': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '576': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '720': {
            slidesPerView: 3,
            spaceBetween: 20, 
        },
        '1000': {
            slidesPerView: 4,
            spaceBetween: 20,
        }
      },
})

let lastestCoursesSlider = new Swiper('.lastest-courses-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".last-swiper-btn-next",
        prevEl: ".last-swiper-btn-prev",
    },
})

let userCommentsSlider = new Swiper('.user-comments-slider', {
    slidesPerView: 1,
    loop: true,
    effect: 'cards',
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
})
