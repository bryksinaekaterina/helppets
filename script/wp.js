// document.addEventListener('DOMContentLoaded', function() {
//     fetch('https://help-pets.uz/wp-json/wp/v2/pages?slug=welcome-page')
//       .then(response => response.json())
//       .then(pages => {
//         if (pages.length > 0) {
//           const welcomePage = pages[0];
//           const contentDiv = document.getElementById('wordpress-content');
//           contentDiv.innerHTML = `<h2>${welcomePage.title.rendered}</h2>${welcomePage.content.rendered}`;
//         } else {
//           const contentDiv = document.getElementById('wordpress-content');
//           contentDiv.innerText = 'Контент не найден.';
//         }
//       })
//       .catch(error => {
//         console.error('Ошибка при получении данных из WordPress:', error);
//         const contentDiv = document.getElementById('wordpress-content');
//         contentDiv.innerText = 'Произошла ошибка при загрузке контента.';
//       });
//   });



// document.addEventListener('DOMContentLoaded', function() {
//     fetch('https://help-pets.uz/wp-json/wp/v2/announcement?_embed&acf_format=standard')
//       .then(response => response.json())
//       .then(posts => {
//         const announcementsGrid = document.querySelector('.announcements-grid');
//         if (announcementsGrid) {
//           posts.forEach(post => {
//             const acf = post.acf;
//             if (acf) {
//               const card = document.createElement('div');
//               card.classList.add('announcement-card');
  
//               const title = document.createElement('h3');
//               title.classList.add('announcement-title');
//               title.textContent = acf.shelter_name || '';
  
//               const logo = document.createElement('div');
//               logo.classList.add('announcement-logo');
//               if (acf.shelter_logo) {
//                 const img = document.createElement('img');
//                 img.src = acf.shelter_logo;
//                 logo.appendChild(img);
//               }
  
//               const needs = document.createElement('p');
//               needs.classList.add('announcement-needs');
//               needs.textContent = `Требуется: ${acf.help_needed || ''}`;
  
//               const text = document.createElement('p');
//               text.classList.add('announcement-text');
//               text.textContent = acf.announcement_text || '';
  
//               const date = document.createElement('p');
//               date.classList.add('announcement-date');
//               date.textContent = `Дата: ${acf.announcement_date || ''}`;
  
//               const button = document.createElement('button');
//               button.classList.add('announcement-button');
//               button.textContent = 'Связаться';
  
//               card.appendChild(title);
//               card.appendChild(logo);
//               card.appendChild(needs);
//               card.appendChild(text);
//               card.appendChild(date);
//               card.appendChild(button);
  
//               announcementsGrid.appendChild(card);
//             }
//           });
//         }
//       })
//       .catch(error => {
//         console.error('Ошибка при получении объявлений:', error);
//       });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('https://help-pets.uz/wp-json/wp/v2/announcement?_embed&acf_format=standard')
//       .then(response => response.json())
//       .then(posts => {
//         const announcementsGrid = document.querySelector('.announcements-grid');
//         if (announcementsGrid) {
//           posts.forEach(post => {
//             const acf = post.acf;
  
//             const card = document.createElement('div');
//             card.classList.add('announcement-card');
  
//             const cardTop = document.createElement('div');
//             cardTop.classList.add('card-top');
//             cardTop.style.display = 'flex';
  
//             const title = document.createElement('h3');
//             title.classList.add('announcement-title');
//             title.textContent = acf.shelter_name || '';
  
//             const logo = document.createElement('div');
//             logo.classList.add('announcement-logo');
//             if (acf.shelter_logo) {
//               const img = document.createElement('img');
//               img.src = acf.shelter_logo;
//               logo.appendChild(img);
//             }
  
//             cardTop.appendChild(title);
//             cardTop.appendChild(logo);
  
//             const needs = document.createElement('p');
//             needs.classList.add('announcement-needs');
//             needs.textContent = `Требуется: ${acf.help_needed || ''}`;
  
//             const text = document.createElement('p');
//             text.classList.add('announcement-text');
//             text.textContent = acf.announcement_text || '';
  
//             const date = document.createElement('p');
//             date.classList.add('announcement-date');
//             date.textContent = `Дата: ${acf.announcement_date || ''}`;
  
//             const button = document.createElement('button');
//             button.classList.add('announcement-button');
//             button.textContent = 'Связаться';
  
//             card.appendChild(cardTop);
//             card.appendChild(needs);
//             card.appendChild(text);
//             card.appendChild(date);
//             card.appendChild(button);
  
//             announcementsGrid.appendChild(card);
//           });
//         }
//       })
//       .catch(error => {
//         console.error('Ошибка при получении объявлений:', error);
//       });
//   });


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

                    // Создаем ссылку
                    const link = document.createElement('a');
                    link.classList.add('announcement-button');
                    link.textContent = 'Связаться';
                    link.href = targetURL; // Устанавливаем один и тот же URL для всех кнопок

                    card.appendChild(cardTop);
                    card.appendChild(needs);
                    card.appendChild(text);
                    card.appendChild(date);
                    card.appendChild(link);

                    announcementsGrid.appendChild(card);
                });
            }
        })
        .catch(error => {
            console.error('Ошибка при получении объявлений:', error);
        });
});