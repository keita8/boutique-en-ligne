const searchTogglers = document.querySelectorAll('[data-search-toggler]');
const searchBox = document.querySelector('[data-search-box]');



for (let i = 0; i < searchTogglers.length; i++) {
    searchTogglers[i].addEventListener('click', function() {
        searchBox.classList.toggle('active');
    })

}



const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    const mobileMenuCloseFunc = function() {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function() {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    })

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);

}


//accorionBtn
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function() {
        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for (let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break;
            if (accordion[i].classList.contains('active')) {
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');
            }
        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    })

}


// slider

const swiper = new Swiper('.sliderbox', {
    // Optional parameters

    loop: true,
    effect: 'fade',

    autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 5000,
    },
});

const carousel = new Swiper('.carouselbox', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: false,
    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breapoints: {
        481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false,
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides: false,
        },
        1023: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            centeredSlides: false,
        },
    }

});

console.log(carousel);