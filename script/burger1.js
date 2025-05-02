document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navbar = document.querySelector('.navbar');
    const overlay = document.getElementById('overlay');

    if (burgerMenu && navbar && overlay) {
        function toggleMenu() {
            navbar.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        burgerMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    } else {
        console.error('One or more elements were not found.');
    }
});