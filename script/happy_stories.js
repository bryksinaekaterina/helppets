// document.addEventListener('DOMContentLoaded', function() {
//     const happyStoriesGrid = document.querySelector('.happy-stories-grid');

//     if (happyStoriesGrid) {
//         fetch('https://help-pets.uz/wp-json/wp/v2/happy_story?_embed&acf_format=standard')
//             .then(response => response.json())
//             .then(stories => {
//                 console.log('Данные счастливых историй получены:', stories);
//                 stories.forEach(story => {
//                     const acf = story.acf;
//                     const title = acf?.story_title
//                     const excerpt = acf?.brief_description;
//                     const fullText = acf?.entire_text;
//                     const imageUrl = acf?.image;

//                     const storyCard = document.createElement('div');
//                     storyCard.classList.add('happy-story-card');

//                     if (imageUrl) {
//                         const image = document.createElement('img');
//                         image.classList.add('story-image');
//                         image.src = imageUrl;
//                         image.alt = title || 'Фото истории';
//                         storyCard.appendChild(image);
//                     }

//                     const titleElement = document.createElement('h3');
//                     titleElement.classList.add('story-title');
//                     titleElement.textContent = title || '';
//                     storyCard.appendChild(titleElement);

//                     const excerptElement = document.createElement('p');
//                     excerptElement.classList.add('story-excerpt');
//                     excerptElement.textContent = excerpt || '';
//                     storyCard.appendChild(excerptElement);

//                     const fullTextElement = document.createElement('p');
//                     fullTextElement.classList.add('story-full-text');
//                     fullTextElement.textContent = fullText || '';
//                     fullTextElement.style.display = 'none'; // Скрываем полный текст изначально
//                     storyCard.appendChild(fullTextElement);

//                     const detailsButton = document.createElement('button');
//                     detailsButton.classList.add('story-details-button');
//                     detailsButton.textContent = 'Подробнее';
//                     detailsButton.addEventListener('click', function() {
//                         excerptElement.style.display = 'none';
//                         fullTextElement.style.display = 'block';
//                         detailsButton.style.display = 'none'; // Скрываем кнопку "Подробнее"
//                     });
//                     storyCard.appendChild(detailsButton);

//                     happyStoriesGrid.appendChild(storyCard);
//                 });
//             })
//             .catch(error => {
//                 console.error('Ошибка при получении счастливых историй:', error);
//             });
//     } else {
//         console.error('Контейнер .happy-stories-grid не найден.');
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const happyStoriesGrid = document.querySelector('.happy-stories-grid');

    if (happyStoriesGrid) {
        fetch('https://help-pets.uz/wp-json/wp/v2/happy_story?_embed&acf_format=standard')
            .then(response => response.json())
            .then(stories => {
                console.log('Данные счастливых историй получены:', stories);
                stories.forEach(story => {
                    const acf = story.acf;
                    const title = acf?.story_title;
                    const excerpt = acf?.brief_description;
                    const fullText = acf?.entire_text;
                    const imageUrl = acf?.image;

                    const storyCard = document.createElement('div');
                    storyCard.classList.add('happy-story-card');

                    if (imageUrl) {
                        const image = document.createElement('img');
                        image.classList.add('story-image');
                        image.src = imageUrl;
                        image.alt = title || 'Фото истории';
                        storyCard.appendChild(image);
                    }

                    const titleElement = document.createElement('h3');
                    titleElement.classList.add('story-title');
                    titleElement.textContent = title || '';
                    storyCard.appendChild(titleElement);

                    const excerptElement = document.createElement('p');
                    excerptElement.classList.add('story-excerpt');
                    excerptElement.textContent = excerpt || '';
                    storyCard.appendChild(excerptElement);

                    const fullTextElement = document.createElement('p');
                    fullTextElement.classList.add('story-full-text');
                    fullTextElement.textContent = fullText || '';
                    fullTextElement.style.display = 'none';

                    const detailsButton = document.createElement('button');
                    detailsButton.classList.add('story-details-button');
                    detailsButton.textContent = 'Подробнее';
                    detailsButton.addEventListener('click', function() {
                        const isExpanded = fullTextElement.style.display === 'block';
                        excerptElement.style.display = isExpanded ? 'block' : 'none';
                        fullTextElement.style.display = isExpanded ? 'none' : 'block';
                        detailsButton.textContent = isExpanded ? 'Подробнее' : 'Свернуть';
                    });
                    storyCard.appendChild(fullTextElement);
                    storyCard.appendChild(detailsButton);

                    happyStoriesGrid.appendChild(storyCard);
                });
            })
            .catch(error => {
                console.error('Ошибка при получении счастливых историй:', error);
            });
    } else {
        console.error('Контейнер .happy-stories-grid не найден.');
    }
});