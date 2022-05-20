
const portfolio = {
    currentPage: 1,
    1: document.getElementById('home'),
    2: document.getElementById('table-of-contents'),
    3: document.getElementById('about-me'),
    4: document.getElementById('personal-skills'),
    5: document.getElementById('work-experience'),
    6: document.getElementById('portfolio'),
    7: document.getElementById('project-01'),
    8: document.getElementById('project-02'),
    9: document.getElementById('project-03'),
    10: document.getElementById('contact'),
    totalPages: 10,
    previousPage: 0,
    animating: false,
    mobile: false,

    goPageForward: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage++
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageForward()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage++
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageForwardMobile()
            testimonials.checkPage()
        }
    },

    goPageBack: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage--
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage--
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBackMobile()
            testimonials.checkPage()
        }
    },

    dropSideBar: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 2
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageForward()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 2
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageDownMobile()
            testimonials.checkPage()
        }
    },

    navHome: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 1
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 1
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    navAboutMe: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 3
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 3
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    navPersonalSkills: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 4
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 4
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    navWorkExperience: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 5
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 5
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    navPortfolio: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 6
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 6
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    navContact: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 10
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 10
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    goProject01: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 7
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 7
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    goProject02: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 8
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 8
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    goProject03: function(){
        if(!portfolio.animating && !portfolio.mobile){
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 9
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageBack()
            testimonials.checkPage()
        }
        else if(!portfolio.animating && portfolio.mobile) {
            portfolio.animating = true
            portfolio.previousPage = portfolio.currentPage
            portfolio.currentPage = 9
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio.animatePageUpMobile()
            testimonials.checkPage()
        }
    },

    // Animations

    animatePageForward: function(){
        portfolio[portfolio.previousPage].style.zIndex = '20'
        setTimeout( _ => {
            portfolio[portfolio.currentPage].classList.replace('no-display','display')
            portfolio[portfolio.previousPage].style.transform = 'translate(-300px, -800px) rotate(-15deg)'
        }, 75)
        setTimeout( _ => {
            portfolio[portfolio.currentPage].style.zIndex = '200'
            portfolio[portfolio.previousPage].style.transform = 'translate(0, 0) rotate(0)'
        }, 375)
        setTimeout( _ => {
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio[portfolio.previousPage].classList.replace('display','no-display')
            portfolio.animating = false
        }, 675)
    },

    animatePageBack: function(){
        portfolio[portfolio.previousPage].style.zIndex = '20'
        setTimeout( _ => {
            portfolio[portfolio.currentPage].classList.replace('no-display','display')
        }, 75)
        setTimeout( _ => {
            portfolio[portfolio.currentPage].style.transform = 'translate(-300px, -800px) rotate(-15deg)'
        }, 100)
        setTimeout( _ => {
            portfolio[portfolio.currentPage].style.zIndex = '200'
            portfolio[portfolio.currentPage].style.transform = 'translate(0, 0) rotate(0)'
        }, 400)
        setTimeout( _ => {
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio[portfolio.previousPage].classList.replace('display','no-display')
            portfolio.animating = false
        }, 700)
    },

    // Mobile Animations

    animatePageForwardMobile: function(){
        portfolio[portfolio.previousPage].style.zIndex = '20'
        setTimeout( _ => {
            portfolio[portfolio.currentPage].classList.replace('no-display','display')
            portfolio[portfolio.previousPage].style.transform = 'translateX(-100vw)'
        }, 75)
        setTimeout( _ => {
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio[portfolio.previousPage].classList.replace('display','no-display')
            portfolio[portfolio.previousPage].style.transform = 'translateX(0)'
            portfolio.animating = false
        }, 375)
    },

    animatePageBackMobile: function(){
        portfolio[portfolio.previousPage].style.zIndex = '20'
        setTimeout( _ => {
            portfolio[portfolio.currentPage].classList.replace('no-display','display')
            portfolio[portfolio.previousPage].style.transform = 'translateX(100vw)'
        }, 75)
        setTimeout( _ => {
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio[portfolio.previousPage].classList.replace('display','no-display')
            portfolio[portfolio.previousPage].style.transform = 'translateX(0)'
            portfolio.animating = false
        }, 375)
    },

    animatePageUpMobile: function(){
        portfolio[portfolio.previousPage].style.zIndex = '20'
        setTimeout( _ => {
            portfolio[portfolio.currentPage].classList.replace('no-display','display')
            portfolio[portfolio.previousPage].style.transform = 'translateY(-100vh)'
        }, 75)
        setTimeout( _ => {
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio[portfolio.previousPage].classList.replace('display','no-display')
            portfolio[portfolio.previousPage].style.transform = 'translateY(0)'
            portfolio.animating = false
        }, 375)
    },

    animatePageDownMobile: function(){
        portfolio[portfolio.previousPage].style.zIndex = '20'
        setTimeout( _ => {
            portfolio[portfolio.currentPage].classList.replace('no-display','display')
            portfolio[portfolio.previousPage].style.transform = 'translateY(100vh)'
        }, 75)
        setTimeout( _ => {
            portfolio[portfolio.previousPage].style.zIndex = '2'
            portfolio[portfolio.currentPage].style.zIndex = '1'
            portfolio[portfolio.previousPage].classList.replace('display','no-display')
            portfolio[portfolio.previousPage].style.transform = 'translateY(0)'
            portfolio.animating = false
        }, 375)
    }
}

// Check viewport size to see how far to translate the side bar and move the nav icon
const viewport = {
    size: window.matchMedia("(max-width: 1150px)"),

    checkSize(){
        if(viewport.size.matches){
            portfolio.mobile = true
        }
    }
}

viewport.checkSize()

const testimonials = {
    currentSlide: 1,
    1: document.getElementById('taelor'),
    2: document.getElementById('tekowa'),
    3: document.getElementById('travis'),
    totalSlides: 3,
    slideInterval: '',

    rotateSlide: function(){
        testimonials[testimonials.currentSlide].classList.replace('display','no-display')
        testimonials.currentSlide++
        if(testimonials.currentSlide <= testimonials.totalSlides) testimonials[testimonials.currentSlide].classList.replace('no-display','display')
        else {
            testimonials.currentSlide = 1
            testimonials[testimonials.currentSlide].classList.replace('no-display','display')
        }
    },

    checkPage: function(){
        if(portfolio.currentPage == 5){
            portfolio.slideInterval = setInterval(testimonials.rotateSlide, 4000)
            console.log('on page')
        } 
        else {clearInterval(portfolio.slideInterval)
            console.log('off page')}
    }
}

window.onload = function() {
    // Forward and Back Arrows
    for(let i = 1; i <= portfolio.totalPages; i++){
        if(i > 1 && i < portfolio.totalPages){
            portfolio[i].children[0].onclick = portfolio.dropSideBar
            portfolio[i].children[portfolio[i].children.length-2].onclick = portfolio.goPageBack
            portfolio[i].children[portfolio[i].children.length-1].onclick = portfolio.goPageForward
        }
        else if(i == 1){
            portfolio[i].children[0].onclick = portfolio.dropSideBar
            portfolio[i].children[portfolio[i].children.length-1].onclick = portfolio.goPageForward
        }
        else if(i == portfolio.totalPages){
            portfolio[i].children[0].onclick = portfolio.dropSideBar
            portfolio[i].children[portfolio[i].children.length-1].onclick = portfolio.goPageBack
        }
    }

    // Navigation Links
    let array = document.querySelector('nav').children
    for(let i = 0; i < array.length; i++){
        i == 0 ? array[i].onclick = portfolio.navHome
        : i == 1 ? array[i].onclick = portfolio.navAboutMe
        : i == 2 ? array[i].onclick = portfolio.navPersonalSkills
        : i == 3 ? array[i].onclick = portfolio.navWorkExperience
        : i == 4 ? array[i].onclick = portfolio.navPortfolio
        : i == 5 ? array[i].onclick = portfolio.navContact
        : null
    }

    // Navigation Links
    array = document.querySelector('.portfolio-section-two').children
    for(let i = 0; i < array.length; i++){
        i == 0 ? array[i].onclick = portfolio.goProject01
        : i == 1 ? array[i].onclick = portfolio.goProject02
        : i == 2 ? array[i].onclick = portfolio.goProject03
        : null
    }
}

// REMOVE THIS AFTER EDITING
portfolio[1].classList.replace('display','no-display')
portfolio[portfolio.currentPage].classList.replace('no-display','display')
// SERIOUSLY REMOVE IT

let array = document.querySelector('nav').children