// document.addEventListener('DOMContentLoaded', function() {
//     const petsGrid = document.querySelector('.pets-grid');

//     if (petsGrid) {
//         fetch('https://help-pets.uz/wp-json/wp/v2/pet?_embed&acf_format=standard')
//             .then(response => response.json())
//             .then(pets => {
//                 console.log('Данные о питомцах получены:', pets);
//                 pets.forEach(pet => {
//                     const acf = pet.acf;
//                     const imageUrl = acf?.photo?.url || pet._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'img/default-pet.png';
//                     const petCard = document.createElement('div');
//                     petCard.classList.add('pet-card');

//                     const image = document.createElement('img');
//                     image.classList.add('pet-image');
//                     image.src = imageUrl;
//                     image.alt = acf?.name || 'Фото питомца';
//                     petCard.appendChild(image);

//                     const cardBody = document.createElement('div');
//                     cardBody.classList.add('pet-card-body');

//                     const name = document.createElement('h3');
//                     name.classList.add('pet-name');
//                     name.textContent = acf?.name || 'Безымянный';
//                     cardBody.appendChild(name);

//                     const info = document.createElement('p');
//                     info.innerHTML = `<span class="pet-gender">${acf?.gender || ''}</span>${acf?.gender && acf?.age ? ', ' : ''}<span class="pet-age">${acf?.age || ''}</span>`;
//                     cardBody.appendChild(info);

//                     const shortDescription = document.createElement('p');
//                     shortDescription.classList.add('pet-short-description');
//                     shortDescription.textContent = acf?.short_description || '';
//                     cardBody.appendChild(shortDescription);

//                     const detailsLink = document.createElement('a');
//                     detailsLink.href = `pet.html?id=${pet.id}`;
//                     detailsLink.classList.add('pet-details-link');
//                     detailsLink.textContent = 'Подробнее';
//                     cardBody.appendChild(detailsLink);

//                     petCard.appendChild(cardBody);
//                     petsGrid.appendChild(petCard);
//                 });
//             })
//             .catch(error => {
//                 console.error('Ошибка при получении питомцев:', error);
//             });
//     } else {
//         console.error('Контейнер .pets-grid не найден.');
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const petsGrid = document.querySelector('.pets-grid');

//     if (petsGrid) {
//         fetch('https://help-pets.uz/wp-json/wp/v2/pet?_embed&acf_format=standard')
//             .then(response => response.json())
//             .then(pets => {
//                 console.log('Данные о питомцах получены:', pets);
//                 pets.forEach(pet => {
//                     const acf = pet.acf;
//                     const imageUrl = acf?.pet_photo?.url || 'img/default-pet.png'; // Используем pet_photo
//                     const petCard = document.createElement('div');
//                     petCard.classList.add('pet-card');


//                     сonsole.log('Объект acf:', acf);
//                     console.log('URL изображения:', imageUrl);

//                     const image = document.createElement('img');
//                     image.classList.add('pet-image');
//                     image.src = imageUrl;
//                     image.alt = acf?.name || 'Фото питомца';
//                     petCard.appendChild(image);

//                     const cardBody = document.createElement('div');
//                     cardBody.classList.add('pet-card-body');

//                     const name = document.createElement('h3');
//                     name.classList.add('pet-name');
//                     name.textContent = acf?.name || 'Безымянный';
//                     cardBody.appendChild(name);

//                     const info = document.createElement('p');
//                     info.innerHTML = `<span class="pet-gender">${acf?.gender || ''}</span>${acf?.gender && acf?.age ? ', ' : ''}<span class="pet-age">${acf?.age || ''}</span>`;
//                     cardBody.appendChild(info);

//                     const shortDescription = document.createElement('p');
//                     shortDescription.classList.add('pet-short-description');
//                     shortDescription.textContent = acf?.short_description || '';
//                     cardBody.appendChild(shortDescription);

//                     const detailsLink = document.createElement('a');
//                     detailsLink.href = `pet.html?id=${pet.id}`;
//                     detailsLink.classList.add('pet-details-link');
//                     detailsLink.textContent = 'Подробнее';
//                     cardBody.appendChild(detailsLink);

//                     petCard.appendChild(cardBody);
//                     petsGrid.appendChild(petCard);
//                 });
//             })
//             .catch(error => {
//                 console.error('Ошибка при получении питомцев:', error);
//             });
//     } else {
//         console.error('Контейнер .pets-grid не найден.');
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const petsGrid = document.querySelector('.pets-grid');

    if (petsGrid) {
        fetch('https://help-pets.uz/wp-json/wp/v2/pet?_embed&acf_format=standard')
            .then(response => response.json())
            .then(pets => {
                console.log('Данные о питомцах получены:', pets);
                pets.forEach(pet => {
                    const acf = pet.acf;
                    console.log('Значение acf.pet_photo:', acf?.pet_photo);
                    const imageUrl = acf?.pet_photo?.url || 'img/default-pet.png';
                    console.log('URL изображения:', imageUrl);
                    const petCard = document.createElement('div');
                    petCard.classList.add('pet-card');

                    const image = document.createElement('img');
                    image.classList.add('pet-image');
                    image.src = imageUrl;
                    image.alt = acf?.name || 'Фото питомца';
                    petCard.appendChild(image);

                    const cardBody = document.createElement('div');
                    cardBody.classList.add('pet-card-body');

                    const name = document.createElement('h3');
                    name.classList.add('pet-name');
                    name.textContent = acf?.name || 'Безымянный';
                    cardBody.appendChild(name);

                    const info = document.createElement('p');
                    info.innerHTML = `<span class="pet-gender">${acf?.gender || ''}</span>${acf?.gender && acf?.age ? ', ' : ''}<span class="pet-age">${acf?.age || ''}</span>`;
                    cardBody.appendChild(info);

                    const shortDescription = document.createElement('p');
                    shortDescription.classList.add('pet-short-description');
                    shortDescription.textContent = acf?.short_description || '';
                    cardBody.appendChild(shortDescription);

                    const detailsLink = document.createElement('a');
                    detailsLink.href = `pet.html?id=${pet.id}`;
                    detailsLink.classList.add('pet-details-link');
                    detailsLink.textContent = 'Подробнее';
                    cardBody.appendChild(detailsLink);

                    petCard.appendChild(cardBody);
                    petsGrid.appendChild(petCard);
                });
            })
            .catch(error => {
                console.error('Ошибка при получении питомцев:', error);
            });
    } else {
        console.error('Контейнер .pets-grid не найден.');
    }
});