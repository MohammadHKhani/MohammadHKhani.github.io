import {courseData} from './utils/database.js'

const $ = document

const coursesContainer = $.querySelector('#coursesContainer'),
prevPageBtn = $.querySelector('#prevPageBtn'),
paginationPageWrapper = $.querySelector('#paginationPageWrapper'),
nextPageBtn = $.querySelector('#nextPageBtn')


console.log(nextPageBtn);

let page = 1
let showCourseCount = 9
let pagesCount = Math.ceil(courseData.length / showCourseCount)

function generateCourseBox (course) {
    return `<a href="/course.html?id=${course.id}" class="course-box">
    <div class="course-box-cover">
        <img src="${course.cover}" alt="course" class="course-box__img">
    </div>
    <div class="course-box__title">${course.title}</div>
    <div class="course-box-info fi-sb">
        <div class="course-box-price-wrapper fi">
            ${course.price === 'free' ? '<span class="course-box__free fi">رایگان</span>' : `<span class="course-box__price">${course.price}</span><svg><use xlink:href="#tooman"></use></svg>`}
        </div>
        <button class="course-box__go fi">
            <svg><use xlink:href="#courseArrow"></use></svg>
        </button>
    </div>
    </a>`
}

function generatePages () {
    let pageHtmlTemplate = ''

    for (let i = 1; i <= pagesCount; i++) {
        if (page === i) {
            pageHtmlTemplate += `<div class="course-pagination__page fi course-pagination__active-page">${i}</div>`
        }
        else {
            pageHtmlTemplate += `<div class="course-pagination__page fi" onclick="changePage('${i}')">${i}</div>`
        }
    }

    paginationPageWrapper.innerHTML = ''

    paginationPageWrapper.insertAdjacentHTML('beforeend', pageHtmlTemplate)
}


function coursePagination () {
    let courses = courseData.slice((page - 1) * showCourseCount, (page) * showCourseCount)

    let coursesHtmlTemplate = courses.map(course => {
        return generateCourseBox(course)
    }).join('')

    coursesContainer.innerHTML = ''

    coursesContainer.insertAdjacentHTML('beforeend', coursesHtmlTemplate)

    generatePages()
}

window.addEventListener('load', () => {
    coursePagination()

})

window.changePage = function (pageNumber) {
    page = +pageNumber
    coursePagination()
}

prevPageBtn.addEventListener('click', () => {
    if (page !== 1) {
        page--
        coursePagination()
    }
})

nextPageBtn.addEventListener('click', () => {
    if (page !== pagesCount) {
        page++
        coursePagination()
    }
})
