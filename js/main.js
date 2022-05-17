
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

    goPageForward: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage++
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    goPageBack: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage--
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    dropSideBar: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 2
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    navHome: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 1
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    navAboutMe: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 3
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    navPersonalSkills: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 4
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    navWorkExperience: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 5
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    navPortfolio: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 6
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    navContact: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 10
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    goProject01: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 7
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    goProject02: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 8
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },

    goProject03: function(){
        portfolio[portfolio.currentPage].classList.replace('display','no-display')
        portfolio.currentPage = 9
        portfolio[portfolio.currentPage].classList.replace('no-display','display')
        testimonials.checkPage()
    },
}

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