import {courseData} from './utils/database.js'

const $ = document

const courseVideo = $.querySelector('#player'),
courseTitle = $.querySelector('#courseTitle'),
courseDesc = $.querySelector('#courseDesc'),
coursePrice = $.querySelector('#coursePrice'),
coursePath = $.querySelector('#coursePath'),
courseHeaderPrice = $.querySelector('.course-header__price')

window.addEventListener('load', () => {
    let urlParameter = new URLSearchParams(location.search)

    let mainCourseID = +urlParameter.get('id')

    let mainCourse = courseData.find(course => course.id === mainCourseID)

    if (mainCourse) {
        document.title = mainCourse.title
        courseVideo.dataset.poster = mainCourse.cover
        courseTitle.textContent = mainCourse.title
        coursePath.textContent = mainCourse.title
        courseDesc.textContent = mainCourse.desc
        if (mainCourse.price === 'free') {
            courseHeaderPrice.innerHTML = 'قیمت : رایگان'
        }
        else {
            coursePrice.textContent = mainCourse.price
        }

        const player = new Plyr('#player');
    }
    else {
        location.href = 'http://127.0.0.1:5500/shop.html'
    }
})


const allCourseSeason = $.querySelectorAll('.course-season')

allCourseSeason.forEach(course => {
    course.addEventListener('click', () => {
        let courseLessons = course.nextElementSibling

        if (courseLessons.dataset.open === 'false') {
            courseLessons.style.height = courseLessons.scrollHeight + 'px'
            courseLessons.dataset.open = 'true'
            course.classList.add('active')
        }
        else {
            courseLessons.style.height = '0'
            courseLessons.dataset.open = 'false'
            course.classList.remove('active')
        }
    
    })
})


const shortLink = $.querySelector('#shortLink'),
modal =  $.querySelector('#modal'),
modalCloseBtn = $.querySelector('.modal__close'),
modalProgress = $.querySelector('.modal__progress')


shortLink.addEventListener('click', () => {
    modal.classList.add('modal--active')
    modalProgress.addEventListener('animationend', () => {
        modal.classList.remove('modal--active')
    })
    if (navigator.clipboard) {
        navigator.clipboard.writeText('https://demos.pishtaz-web.com/ostadsho/?p=62')
    }
})

modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal--active')
})


const pageProgress = $.querySelector('#pageProgress') 

window.addEventListener('scroll', () => {
    pageProgress.style.width = `${(window.scrollY / ($.body.clientHeight - window.innerHeight)) * 100}%`
})
