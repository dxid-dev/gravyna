/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

/*===== MOVE ROTATE =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/250
        layer.style.transform = `rotate(${x}deg)`
    })
}

/*===== MOVE VER HOR =====*/
document.addEventListener('mousemove', move2);
function move2(e){
    this.querySelectorAll('.move2').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/350

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'left'})
sr.reveal(`.home__description`,{delay: 900, origin: 'right'})
sr.reveal(`.button button--flex`,{delay: 900, origin: 'right'})



/*=============== ANIM S1 ===============*/
sr.reveal(`.s1__img1`,{origin: 'left'})
sr.reveal(`.s1__img2`,{delay: 1000, origin: 'top'})
sr.reveal(`.s1__img3`,{delay: 1500, origin: 'right'})
sr.reveal(`.s1__desc1`)
sr.reveal(`.s1__desc2`)

/*=============== ANIM S2 ===============*/
sr.reveal(`.s2__desc1`,{origin: 'right'})
sr.reveal(`.s2__img`,{origin: 'left'})

/*=============== ANIM S3 ===============*/
sr.reveal(`.s3__img`,{delay: 1000, origin: 'top'})
sr.reveal(`.s3__desc`,{delay: 700})

/*=============== ANIM S4 ===============*/
sr.reveal(`.s4__desc`,{origin: 'top'})
sr.reveal(`.s4__img1`,{delay: 900, origin: 'left'})
sr.reveal(`.s4__img2`,{delay: 900, origin: 'right'})

/*=============== ANIM S5 ===============*/
sr.reveal(`.s5__img`,{delay: 900, origin: 'left'})
sr.reveal(`.s5__desc`,{origin: 'top'})


/*=============== ANIM S6 ===============*/
sr.reveal(`.s6__img1`,{delay: 900, origin: 'left'})
sr.reveal(`.s6__img2`,{delay: 900, origin: 'right'})
sr.reveal(`.s6__img3`,{delay: 900, origin: 'right'})
sr.reveal(`.s6__desc`,{delay: 900, origin: 'top'})

/*=============== ANIM S7 ===============*/
sr.reveal(`.s7__img1`,{origin: 'left'})
sr.reveal(`.s7__img2`,{delay: 1200,origin: 'right'})
sr.reveal(`.s7__desc`,{delay: 900, origin: 'right'})

/*=============== ANIM S8 ===============*/
sr.reveal(`.s8__desc2`,{origin: 'top'})
sr.reveal(`.s8__img`,{delay: 900})

/*=============== ANIM S9 ===============*/
sr.reveal(`.s9__desc2`,{origin: 'left'})
sr.reveal(`.s9__desc1`)
sr.reveal(`.s9__img1_1`,{origin: 'right'})
sr.reveal(`.s9__img1_2`,{delay: 1000})

sr.reveal(`.s9__img2`,{origin: 'left'})
sr.reveal(`.s9__desc3`,{origin: 'right'})

/*=============== ANIM S10 ===============*/
sr.reveal(`.s10__img1`,{delay: 1200, origin: 'right'})
sr.reveal(`.s10__img2`,{delay: 1200, origin: 'left'})

/*=============== ANIM S11 ===============*/
sr.reveal(`.s11__desc`,{delay: 1000, origin: 'left'})
sr.reveal(`.s11__img`,{delay: 1000, origin: 'right'})

/*=============== ANIM S12 ===============*/
sr.reveal(`.s12__title`,{origin: 'top'})
sr.reveal(`.s12__subtitle`,{delay: 1000, origin: 'top'})
