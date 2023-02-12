/** DECLENCHEMENT DU FORMULAIRE DE RECHERCHE */
const searchTogglers = document.querySelectorAll('[data-search-toggler]');
const searchBox = document.querySelector('[data-search-box]');

for (let i = 0; i < searchTogglers.length; i++) {
    searchTogglers[i].addEventListener('click', function() {
        searchBox.classList.toggle('active');
    })

}


const submenu = document.querySelector('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if (this.closest('.has-child').classList != 'active') {
        this.closest('.has-child').classList.toggle('active');
    }
}))


// MENU MOBILE 
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    const mobileMenuCloseFunc = function() {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function)

}