document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var popup = document.getElementById('popup');
    var close = document.querySelector('.close');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Показать поп-ап
        popup.style.display = 'flex';
        
        // Здесь можно добавить логику отправки данных формы на сервер

        // Сброс формы
        form.reset();
    });

    close.addEventListener('click', function() {
        // Скрыть поп-ап
        popup.style.display = 'none';
    });

    // Закрытие поп-апа при клике вне его области
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});