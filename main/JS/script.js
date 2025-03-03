document.addEventListener('DOMContentLoaded', () => {
    // Бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav_menu');
    const body = document.body;

    const toggleMenu = () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    burgerMenu.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnBurger = burgerMenu.contains(e.target);
        
        if (!isClickInsideMenu && !isClickOnBurger && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Обновляем обработчик скролла
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) { // Активируем фиксацию после прокрутки на 100px
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }

        lastScroll = currentScroll;
    });
});
