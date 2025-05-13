document.addEventListener('DOMContentLoaded', function() {
    const targetURL = 'https://help-pets.uz/static/shelters.html'; // Замените на нужный URL

    fetch('https://help-pets.uz/wp-json/wp/v2/announcement?_embed&acf_format=standard')
        .then(response => response.json())
        .then(posts => {
            const announcementsGrid = document.querySelector('.announcements-grid');
            if (announcementsGrid) {
                posts.forEach(post => {
                    const acf = post.acf;

                    const card = document.createElement('div');
                    card.classList.add('announcement-card');

                    const cardTop = document.createElement('div');
                    cardTop.classList.add('card-top');
                    cardTop.style.display = 'flex';

                    const title = document.createElement('h3');
                    title.classList.add('announcement-title');
                    title.textContent = acf.shelter_name || '';

                    const logo = document.createElement('div');
                    logo.classList.add('announcement-logo');
                    if (acf.shelter_logo) {
                        const img = document.createElement('img');
                        img.src = acf.shelter_logo;
                        logo.appendChild(img);
                    }

                    cardTop.appendChild(title);
                    cardTop.appendChild(logo);

                    const needs = document.createElement('p');
                    needs.classList.add('announcement-needs');
                    needs.textContent = `Требуется: ${acf.help_needed || ''}`;

                    const text = document.createElement('p');
                    text.classList.add('announcement-text');
                    text.textContent = acf.announcement_text || '';

                    const date = document.createElement('p');
                    date.classList.add('announcement-date');
                    date.textContent = `Дата: ${acf.announcement_date || ''}`;

                    const link = document.createElement('a');
                    link.classList.add('announcement-button');
                    link.textContent = 'Связаться';
                    link.href = targetURL;

                    card.appendChild(cardTop);
                    card.appendChild(needs);
                    card.appendChild(text);
                    card.appendChild(date);
                    card.appendChild(link);

                    announcementsGrid.appendChild(card);
                });
            } else {
                console.error('Элемент .announcements-grid не найден.');
            }
        })
        .catch(error => {
            console.error('Ошибка при получении объявлений:', error);
        });
});