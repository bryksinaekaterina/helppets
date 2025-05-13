// document.addEventListener('DOMContentLoaded', function() {
//     const targetURL = 'https://help-pets.uz/static/shelters.html'; // Замените на нужный URL

//     fetch('https://help-pets.uz/wp-json/wp/v2/announcement?_embed&acf_format=standard')
//         .then(response => response.json())
//         .then(posts => {
//             const announcementsGrid = document.querySelector('.announcements-grid');
//             if (announcementsGrid) {
//                 posts.forEach(post => {
//                     const acf = post.acf;

//                     const card = document.createElement('div');
//                     card.classList.add('announcement-card');

//                     const cardTop = document.createElement('div');
//                     cardTop.classList.add('card-top');
//                     cardTop.style.display = 'flex';

//                     const title = document.createElement('h3');
//                     title.classList.add('announcement-title');
//                     title.textContent = acf.shelter_name || '';

//                     const logo = document.createElement('div');
//                     logo.classList.add('announcement-logo');
//                     if (acf.shelter_logo) {
//                         const img = document.createElement('img');
//                         img.src = acf.shelter_logo;
//                         logo.appendChild(img);
//                     }

//                     cardTop.appendChild(title);
//                     cardTop.appendChild(logo);

//                     const needs = document.createElement('p');
//                     needs.classList.add('announcement-needs');
//                     needs.textContent = `Требуется: ${acf.help_needed || ''}`;

//                     const text = document.createElement('p');
//                     text.classList.add('announcement-text');
//                     text.textContent = acf.announcement_text || '';

//                     const date = document.createElement('p');
//                     date.classList.add('announcement-date');
//                     date.textContent = `Дата: ${acf.announcement_date || ''}`;

//                     const link = document.createElement('a');
//                     link.classList.add('announcement-button');
//                     link.textContent = 'Связаться';
//                     link.href = targetURL;

//                     card.appendChild(cardTop);
//                     card.appendChild(needs);
//                     card.appendChild(text);
//                     card.appendChild(date);
//                     card.appendChild(link);

//                     announcementsGrid.appendChild(card);
//                 });
//             } else {
//                 console.error('Элемент .announcements-grid не найден.');
//             }
//         })
//         .catch(error => {
//             console.error('Ошибка при получении объявлений:', error);
//         });
// });

document.addEventListener('DOMContentLoaded', function() {
    const targetURL = 'https://help-pets.uz/static/shelters.html'; // Замените на нужный URL

    fetch('https://help-pets.uz/wp-json/wp/v2/announcement?_embed&acf_format=standard')
        .then(response => response.json())
        .then(posts => {
            const announcementsGrid = document.querySelector('.announcements-grid');
            if (announcementsGrid) {
                posts.forEach(post => {
                    console.log('Post data:', post); // <-- Добавлено

                    const acf = post.acf;

                    const card = document.createElement('div');
                    card.classList.add('announcement-card');

                    const cardTop = document.createElement('div');
                    cardTop.classList.add('card-top');
                    cardTop.style.display = 'flex';

                    const title = document.createElement('h3');
                    title.classList.add('announcement-title');
                    console.log('Title element:', title); // <-- Добавлено
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
                    console.log('Needs element:', needs); // <-- Добавлено
                    needs.textContent = `Требуется: ${acf.help_needed || ''}`;

                    const text = document.createElement('p');
                    text.classList.add('announcement-text');
                    console.log('Text element:', text); // <-- Добавлено
                    text.textContent = acf.announcement_text || '';

                    const date = document.createElement('p');
                    date.classList.add('announcement-date');
                    console.log('Date element:', date); // <-- Добавлено
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



// document.addEventListener('DOMContentLoaded', function() {
//     const newsGrid = document.querySelector('.news-grid'); // Получаем контейнер для новостей

//     if (newsGrid) {
//         fetch('https://help-pets.uz/wp-json/wp/v2/news?_embed&acf_format=standard')
//             .then(response => response.json())
//             .then(newsPosts => {
//                 newsPosts.forEach(post => {
//                     const acf = post.acf;
//                     const featuredMedia = post._embedded['wp:featuredmedia']?.[0]?.source_url || '';

//                     const newsCard = document.createElement('div');
//                     newsCard.classList.add('news-card');

//                     const image = document.createElement('img');
//                     image.classList.add('news-image');
//                     image.src = featuredMedia;
//                     image.alt = acf?.news_title || ''; // Используем заголовок как альтернативный текст

//                     const title = document.createElement('h3');
//                     title.classList.add('news-title');
//                     title.textContent = acf?.news_title || '';

//                     const text = document.createElement('p');
//                     text.classList.add('news-text');
//                     text.textContent = acf?.news_text || '';

//                     const date = document.createElement('p');
//                     date.classList.add('news-date');
//                     date.textContent = acf?.news_date || '';

//                     const source = document.createElement('p');
//                     source.classList.add('news-source');
//                     const sourceLink = document.createElement('a');
//                     sourceLink.href = acf?.news_source_url || '#';
//                     sourceLink.textContent = acf?.news_source_text || 'Источник';
//                     source.appendChild(sourceLink);

//                     newsCard.appendChild(image);
//                     newsCard.appendChild(title);
//                     newsCard.appendChild(text);
//                     newsCard.appendChild(date);
//                     newsCard.appendChild(source);

//                     newsGrid.appendChild(newsCard);
//                 });
//             })
//             .catch(error => {
//                 console.error('Ошибка при получении новостей:', error);
//             });
//     } else {
//         console.error('Контейнер .news-grid не найден.');
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const newsGrid = document.querySelector('.news-grid');

    if (newsGrid) {
        console.log('Контейнер новостей найден:', newsGrid);
        console.log('Собираемся выполнить запрос к API новостей...');
        fetch('https://help-pets.uz/wp-json/wp/v2/news?_embed&acf_format=standard')
            .then(response => response.json())
            .then(newsPosts => {
                console.log('Данные о новостях получены:', newsPosts);
                newsPosts.forEach(post => {
                    const acf = post.acf;
                    console.log('Данные ACF для новости:', acf);

                    const imageUrl = acf?.image || '';
                    const newsTitle = acf?.news_caption || ''; // Используем news_caption для заголовка
                    const sourceUrl = acf?.source || '#';      // Используем source для URL источника
                    const sourceText = 'Источник';             // Текст ссылки "Источник"

                    const newsCard = document.createElement('div');
                    newsCard.classList.add('news-card');

                    const image = document.createElement('img');
                    image.classList.add('news-image');
                    image.src = imageUrl;
                    image.alt = newsTitle;

                    const title = document.createElement('h5');
                    title.classList.add('news-title');
                    title.textContent = newsTitle;

                    const text = document.createElement('p');
                    text.classList.add('news-text');
                    text.textContent = acf?.news_text || '';

                    const date = document.createElement('p');
                    date.classList.add('news-date');
                    date.textContent = acf?.date || '';

                    const source = document.createElement('p');
                    source.classList.add('news-source');
                    const sourceLink = document.createElement('a');
                    sourceLink.href = sourceUrl;
                    sourceLink.textContent = sourceText;
                    source.appendChild(sourceLink);

                    newsCard.appendChild(image);
                    newsCard.appendChild(title);
                    newsCard.appendChild(text);
                    newsCard.appendChild(date);
                    newsCard.appendChild(source);

                    newsGrid.appendChild(newsCard);
                });
            })
            .catch(error => {
                console.error('Ошибка при получении новостей:', error);
            });
    } else {
        console.error('Контейнер .news-grid не найден.');
    }
});