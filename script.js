document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    const toggleNav = () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    };

    const toggleTheme = () => {
        if (themeSwitch.checked) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    };

    burger.addEventListener('click', toggleNav);
    themeSwitch.addEventListener('change', toggleTheme);

    // Initialize the theme based on the current checkbox state
    toggleTheme();
});
