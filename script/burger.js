// document.addEventListener('DOMContentLoaded', function() {
//     const burgerMenu = document.getElementById('burger-menu');
//     const navbar = document.querySelector('.navbar');

//     burgerMenu.addEventListener('click', function() {
//         navbar.classList.toggle('active');
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navbar = document.querySelector('.navbar');

    burgerMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // обработка раскрытия подменю на мобильных экранах
    document.querySelectorAll('.dropdown .menu-title').forEach(item => {
        item.addEventListener('click', function(event) {
            // предотвращаем текущий переход по ссылке
            event.stopPropagation();

            const dropdownMenu = this.nextElementSibling;
            if (dropdownMenu.classList.contains('active')) {
                dropdownMenu.classList.remove('active');
            } else {
                // скрываем все активные меню, чтобы только одно было открыто
                document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                    menu.classList.remove('active');
                });
                dropdownMenu.classList.add('active');
            }
        });
    });
});




