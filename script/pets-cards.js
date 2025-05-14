// document.addEventListener('DOMContentLoaded', function() {
//     const petsGrid = document.querySelector('.pets-grid');

//     if (petsGrid) {
//         fetch('https://help-pets.uz/wp-json/wp/v2/pet?_embed&acf_format=standard')
//             .then(response => response.json())
//             .then(pets => {
//                 console.log('Данные о питомцах получены:', pets);
//                 pets.forEach(pet => {
//                     const acf = pet.acf;
//                     console.log('Объект acf:', acf);

//                     const petName = acf?.pet_name;
//                     const imageUrl = acf?.pet_photo;
//                     const petGender = acf?.pet_gender;
//                     const petAge = acf?.pet_age;
//                     const needHelp = acf?.need_help; // Получаем значение поля "Требуется помощь"

//                     const petCard = document.createElement('div');
//                     petCard.classList.add('pet-card');

//                     // Добавляем индикатор "Требуется помощь"
//                     if (needHelp) {
//                         const needHelpIndicator = document.createElement('div');
//                         needHelpIndicator.classList.add('need-help-indicator');
//                         needHelpIndicator.innerHTML = '!'; // Изменили символ
//                         petCard.appendChild(needHelpIndicator);
//                     }

//                     const image = document.createElement('img');
//                     image.classList.add('pet-image');
//                     image.alt = petName || 'Фото питомца';
//                     if (imageUrl) {
//                         image.src = imageUrl;
//                     }
//                     petCard.appendChild(image);

//                     const cardBody = document.createElement('div');
//                     cardBody.classList.add('pet-card-body');

//                     const name = document.createElement('h3');
//                     name.classList.add('pet-name');
//                     if (petName) {
//                         name.textContent = petName;
//                     }
//                     cardBody.appendChild(name);

//                     const info = document.createElement('p');
//                     let infoParts = [];
//                     if (petGender) {
//                         infoParts.push(`<span class="pet-gender">${petGender}</span>`);
//                     }
//                     if (petAge) {
//                         infoParts.push(`<span class="pet-age">${petAge}</span>`);
//                     }
//                     info.innerHTML = infoParts.join(', ');
//                     cardBody.appendChild(info);

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
//     const animalTypeDropdown = document.querySelector('.filter:nth-child(2) .dropdown-toggle');
//     const animalTypeMenu = document.querySelector('.filter:nth-child(2) .dropdown-menu');
//     const shelterDropdown = document.querySelector('.filter:nth-child(3) .dropdown-toggle');
//     const shelterMenu = document.querySelector('.filter:nth-child(3) .dropdown-menu');
//     const urgentHelpCheckbox = document.querySelector('#custom-checkbox');
//     const clearFiltersButton = document.querySelector('.clear-button');

//     let allPets = []; // Массив для хранения всех полученных питомцев

//     function renderPets(pets) {
//         petsGrid.innerHTML = ''; // Очищаем текущий список
//         pets.forEach(pet => {
//             const acf = pet.acf;
//             const petName = acf?.pet_name;
//             const imageUrl = acf?.pet_photo;
//             const petGender = acf?.pet_gender;
//             const petAge = acf?.pet_age;
//             const needHelp = acf?.need_help;

//             const petCard = document.createElement('div');
//             petCard.classList.add('pet-card');

//             if (needHelp) {
//                 const needHelpIndicator = document.createElement('div');
//                 needHelpIndicator.classList.add('need-help-indicator');
//                 needHelpIndicator.innerHTML = '!';
//                 petCard.appendChild(needHelpIndicator);
//             }

//             const image = document.createElement('img');
//             image.classList.add('pet-image');
//             image.alt = petName || 'Фото питомца';
//             if (imageUrl) {
//                 image.src = imageUrl;
//             }
//             petCard.appendChild(image);

//             const cardBody = document.createElement('div');
//             cardBody.classList.add('pet-card-body');

//             const name = document.createElement('h3');
//             name.classList.add('pet-name');
//             if (petName) {
//                 name.textContent = petName;
//             }
//             cardBody.appendChild(name);

//             const info = document.createElement('p');
//             let infoParts = [];
//             if (petGender) {
//                 infoParts.push(`<span class="pet-gender">${petGender}</span>`);
//             }
//             if (petAge) {
//                 infoParts.push(`<span class="pet-age">${petAge}</span>`);
//             }
//             info.innerHTML = infoParts.join(', ');
//             cardBody.appendChild(info);

//             const detailsLink = document.createElement('a');
//             detailsLink.href = `pet.html?id=${pet.id}`;
//             detailsLink.classList.add('pet-details-link');
//             detailsLink.textContent = 'Подробнее';
//             cardBody.appendChild(detailsLink);

//             petCard.appendChild(cardBody);
//             petsGrid.appendChild(petCard);
//         });
//     }

//     function filterPets() {
//         const selectedAnimalType = animalTypeDropdown.textContent === 'Все' ? 'all' : animalTypeDropdown.textContent.toLowerCase();
//         const selectedShelter = shelterDropdown.textContent === 'Все' ? 'all' : shelterDropdown.textContent;
//         const isUrgentHelp = urgentHelpCheckbox.checked;

//         const filteredPets = allPets.filter(pet => {
//             const acf = pet.acf;
//             const animalMatch = selectedAnimalType === 'all' || acf?.pet_type?.toLowerCase().includes(selectedAnimalType.slice(0, -1)); // Обрезаем 's'
//             const shelterMatch = selectedShelter === 'all' || acf?.shelter === selectedShelter;
//             const urgentMatch = !isUrgentHelp || acf?.need_help;

//             return animalMatch && shelterMatch && urgentMatch;
//         });
//         renderPets(filteredPets);
//     }

//     // Получение данных и первоначальный рендеринг
//     fetch('https://help-pets.uz/wp-json/wp/v2/pet?_embed&acf_format=standard')
//         .then(response => response.json())
//         .then(pets => {
//             allPets = pets;
//             renderPets(allPets);

//             // Заполнение выпадающего списка приютов
//             const shelters = [...new Set(pets.map(pet => pet.acf?.shelter).filter(Boolean))];
//             const shelterMenuList = shelterMenu.querySelector('ul');
//             shelters.forEach(shelter => {
//                 const li = document.createElement('li');
//                 li.dataset.value = shelter;
//                 li.textContent = shelter;
//                 shelterMenuList.appendChild(li);
//             });

//             // Обработчики событий для фильтров
//             animalTypeMenu.querySelectorAll('li').forEach(li => {
//                 li.addEventListener('click', function() {
//                     animalTypeDropdown.textContent = this.textContent;
//                     filterPets();
//                 });
//             });

//             shelterMenu.querySelectorAll('li').forEach(li => {
//                 li.addEventListener('click', function() {
//                     shelterDropdown.textContent = this.textContent;
//                     filterPets();
//                 });
//             });

//             urgentHelpCheckbox.addEventListener('change', filterPets);

//             clearFiltersButton.addEventListener('click', function() {
//                 animalTypeDropdown.textContent = 'Все';
//                 shelterDropdown.textContent = 'Все';
//                 urgentHelpCheckbox.checked = false;
//                 filterPets();
//             });

//             // Обработчики для открытия/закрытия дропдаунов
//             document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
//                 toggle.addEventListener('click', function() {
//                     this.nextElementSibling.classList.toggle('show');
//                 });
//             });

//             // Закрытие дропдаунов при клике вне их
//             window.addEventListener('click', function(e) {
//                 if (!e.target.matches('.dropdown-toggle')) {
//                     const dropdowns = document.querySelectorAll('.dropdown-menu');
//                     dropdowns.forEach(d => d.classList.remove('show'));
//                 }
//             });

//         })
//     //     .catch(error => {
//     //         console.error('Ошибка при получении питомцев:', error);
//     //     });
//     // } else {
//     //     console.error('Контейнер .pets-grid не найден.');
//     // }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const petsGrid = document.querySelector('.pets-grid');
//     const animalTypeDropdown = document.querySelector('.filter:nth-child(2) .dropdown-toggle');
//     const animalTypeMenu = document.querySelector('.filter:nth-child(2) .dropdown-menu');
//     const shelterDropdown = document.querySelector('.filter:nth-child(3) .dropdown-toggle');
//     const shelterMenu = document.querySelector('.filter:nth-child(3) .dropdown-menu');
//     const urgentHelpCheckbox = document.querySelector('#custom-checkbox');
//     const clearFiltersButton = document.querySelector('.clear-button');

//     let allPets = []; // Массив для хранения всех полученных питомцев

//     function renderPets(pets) {
//         petsGrid.innerHTML = ''; // Очищаем текущий список
//         pets.forEach(pet => {
//             const acf = pet.acf;
//             const petName = acf?.pet_name;
//             const imageUrl = acf?.pet_photo;
//             const petGender = acf?.pet_gender;
//             const petAge = acf?.pet_age;
//             const needHelp = acf?.need_help;

//             const petCard = document.createElement('div');
//             petCard.classList.add('pet-card');

//             if (needHelp) {
//                 const needHelpIndicator = document.createElement('div');
//                 needHelpIndicator.classList.add('need-help-indicator');
//                 needHelpIndicator.innerHTML = '!';
//                 petCard.appendChild(needHelpIndicator);
//             }

//             const image = document.createElement('img');
//             image.classList.add('pet-image');
//             image.alt = petName || 'Фото питомца';
//             if (imageUrl) {
//                 image.src = imageUrl;
//             }
//             petCard.appendChild(image);

//             const cardBody = document.createElement('div');
//             cardBody.classList.add('pet-card-body');

//             const name = document.createElement('h3');
//             name.classList.add('pet-name');
//             if (petName) {
//                 name.textContent = petName;
//             }
//             cardBody.appendChild(name);

//             const info = document.createElement('p');
//             let infoParts = [];
//             if (petGender) {
//                 infoParts.push(`<span class="pet-gender">${petGender}</span>`);
//             }
//             if (petAge) {
//                 infoParts.push(`<span class="pet-age">${petAge}</span>`);
//             }
//             info.innerHTML = infoParts.join(', ');
//             cardBody.appendChild(info);

//             const detailsLink = document.createElement('a');
//             detailsLink.href = `pet.html?id=${pet.id}`;
//             detailsLink.classList.add('pet-details-link');
//             detailsLink.textContent = 'Подробнее';
//             cardBody.appendChild(detailsLink);

//             petCard.appendChild(cardBody);

//             console.log('Созданная карточка:', petCard); // Добавьте эту строку
//             console.log('petsGrid перед appendChild:', petsGrid);
//             petsGrid.appendChild(petCard);
//         });
//     }

//     function filterPets() {
//         const selectedAnimalType = animalTypeDropdown.textContent === 'Все' ? 'all' : animalTypeDropdown.textContent.toLowerCase();
//         const selectedShelter = shelterDropdown.textContent === 'Все' ? 'all' : shelterDropdown.textContent;
//         const isUrgentHelp = urgentHelpCheckbox.checked;

//         const filteredPets = allPets.filter(pet => {
//             const acf = pet.acf;
//             const animalMatch = selectedAnimalType === 'all' || acf?.pet_type?.toLowerCase().includes(selectedAnimalType.slice(0, -1)); // Обрезаем 's'
//             const shelterMatch = selectedShelter === 'all' || acf?.shelter === selectedShelter;
//             const urgentMatch = !isUrgentHelp || acf?.need_help;

//             return animalMatch && shelterMatch && urgentMatch;
//         });
//         renderPets(filteredPets);
//     }

//     // Получение данных и первоначальный рендеринг
//     fetch('https://help-pets.uz/wp-json/wp/v2/pet?_embed&acf_format=standard')
//         .then(response => response.json())
//         .then(pets => {
//             console.log('Данные о питомцах получены:', pets);
//             console.log('Контейнер petsGrid:', petsGrid); // Вот эта строка
//             allPets = pets;
//             renderPets(allPets);

//             // Заполнение выпадающего списка приютов
//             const shelters = [...new Set(pets.map(pet => pet.acf?.shelter).filter(Boolean))];
//             const shelterMenuList = shelterMenu.querySelector('ul');
//             shelters.forEach(shelter => {
//                 const li = document.createElement('li');
//                 li.dataset.value = shelter;
//                 li.textContent = shelter;
//                 shelterMenuList.appendChild(li);
//             });

//             // Обработчики событий для фильтров
//             animalTypeMenu.querySelectorAll('li').forEach(li => {
//                 li.addEventListener('click', function() {
//                     animalTypeDropdown.textContent = this.textContent;
//                     filterPets();
//                 });
//             });

//             shelterMenu.querySelectorAll('li').forEach(li => {
//                 li.addEventListener('click', function() {
//                     shelterDropdown.textContent = this.textContent;
//                     filterPets();
//                 });
//             });

//             urgentHelpCheckbox.addEventListener('change', filterPets);

//             clearFiltersButton.addEventListener('click', function() {
//                 animalTypeDropdown.textContent = 'Все';
//                 shelterDropdown.textContent = 'Все';
//                 urgentHelpCheckbox.checked = false;
//                 filterPets();
//             });

//             // Обработчики для открытия/закрытия дропдаунов
//             document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
//                 toggle.addEventListener('click', function() {
//                     this.nextElementSibling.classList.toggle('show');
//                 });
//             });

//             // Закрытие дропдаунов при клике вне их
//             window.addEventListener('click', function(e) {
//                 if (!e.target.matches('.dropdown-toggle')) {
//                     const dropdowns = document.querySelectorAll('.dropdown-menu');
//                     dropdowns.forEach(d => d.classList.remove('show'));
//                 }
//             });

//         })
//     //     .catch(error => {
//     //         console.error('Ошибка при получении питомцев:', error);
//     //     });
//     // } else {
//     //     console.error('Контейнер .pets-grid не найден.');
//     // }
// });

document.addEventListener('DOMContentLoaded', function() {
    const initialPetsGrid = document.querySelector('.pets-grid');
    const animalTypeDropdown = document.querySelector('.filter:nth-child(2) .dropdown-toggle');
    const animalTypeMenu = document.querySelector('.filter:nth-child(2) .dropdown-menu');
    const shelterDropdown = document.querySelector('.filter:nth-child(3) .dropdown-toggle');
    const shelterMenu = document.querySelector('.filter:nth-child(3) .dropdown-menu');
    const urgentHelpCheckbox = document.querySelector('#custom-checkbox');
    const clearFiltersButton = document.querySelector('.clear-button');
    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', function() {
            if (animalTypeDropdown) {
                animalTypeDropdown.textContent = 'Все';
            }
            if (shelterDropdown) {
                shelterDropdown.textContent = 'Все';
            }
            if (urgentHelpCheckbox) {
                urgentHelpCheckbox.checked = false;
            }
            filterPets(); // Вызываем функцию фильтрации, чтобы обновить отображение
        });
    }

    let allPets = [];

    function renderPets(pets, targetGrid) {
        targetGrid.innerHTML = '';
        pets.forEach(pet => {
            const acf = pet.acf;
            const petName = acf?.pet_name;
            const imageUrl = acf?.pet_photo;
            const petGender = acf?.pet_gender;
            const petAge = acf?.pet_age;
            const needHelp = acf?.need_help;

            const petCard = document.createElement('div');
            petCard.classList.add('pet-card');

            if (needHelp) {
                const needHelpIndicator = document.createElement('div');
                needHelpIndicator.classList.add('need-help-indicator');
                needHelpIndicator.innerHTML = '!';
                petCard.appendChild(needHelpIndicator);
            }

            const image = document.createElement('img');
            image.classList.add('pet-image');
            image.alt = petName || 'Фото питомца';
            if (imageUrl) {
                image.src = imageUrl;
            }
            petCard.appendChild(image);

            const cardBody = document.createElement('div');
            cardBody.classList.add('pet-card-body');

            const name = document.createElement('h3');
            name.classList.add('pet-name');
            if (petName) {
                name.textContent = petName;
            }
            cardBody.appendChild(name);

            const info = document.createElement('p');
            let infoParts = [];
            if (petGender) {
                infoParts.push(`<span class="pet-gender">${petGender}</span>`);
            }
            if (petAge) {
                infoParts.push(`<span class="pet-age">${petAge}</span>`);
            }
            info.innerHTML = infoParts.join(', ');
            cardBody.appendChild(info);

            const detailsLink = document.createElement('a');
            detailsLink.href = `pet.html?id=${pet.id}`;
            detailsLink.classList.add('pet-details-link');
            detailsLink.textContent = 'Подробнее';
            cardBody.appendChild(detailsLink);

            petCard.appendChild(cardBody);
            targetGrid.appendChild(petCard);
        });
    }

    function filterPets() {
        const selectedAnimalType = animalTypeDropdown.textContent === 'Все' ? 'all' : animalTypeDropdown.textContent.toLowerCase();
        const selectedShelter = shelterDropdown.textContent === 'Все' ? 'all' : shelterDropdown.textContent;
        const isUrgentHelp = urgentHelpCheckbox.checked;

        const filteredPets = allPets.filter(pet => {
            const acf = pet.acf;
            const animalMatch = selectedAnimalType === 'all' || acf?.pet_type?.toLowerCase() === selectedAnimalType;
            const shelterMatch = selectedShelter === 'all' || acf?.shelter === selectedShelter;
            const urgentMatch = !isUrgentHelp || acf?.need_help;

            return animalMatch && shelterMatch && urgentMatch;
        });
        renderPets(filteredPets, initialPetsGrid);
    }

    // Настройка обработчиков событий
    if (animalTypeMenu) {
        animalTypeMenu.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', function() {
                animalTypeDropdown.textContent = this.textContent;
                filterPets();
            });
        });
    }

    if (shelterMenu) {
        shelterMenu.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', function() {
                shelterDropdown.textContent = this.textContent;
                filterPets();
            });
        });
    }

    if (urgentHelpCheckbox) {
        urgentHelpCheckbox.addEventListener('change', filterPets);
    }

    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', function() {
            animalTypeDropdown.textContent = 'Все';
            shelterDropdown.textContent = 'Все';
            urgentHelpCheckbox.checked = false;
            filterPets();
        });
    }

    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('show');
        });
    });

    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-toggle')) {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(d => d.classList.remove('show'));
        }
    });

    fetch('https://help-pets.uz/wp-json/wp/v2/pet?_embed&acf_format=standard')
        .then(response => response.json())
        .then(pets => {
            allPets = pets;
            if (initialPetsGrid) {
                renderPets(allPets, initialPetsGrid);

                // Заполнение выпадающего списка приютов
                const shelters = [...new Set(pets.map(pet => pet.acf?.shelter).filter(Boolean))];
                const shelterMenuList = shelterMenu.querySelector('ul');
                if (shelterMenuList) {
                    shelters.forEach(shelter => {
                        const li = document.createElement('li');
                        li.dataset.value = shelter;
                        li.textContent = shelter;
                        shelterMenuList.appendChild(li);
                    });
                }
            }
        })
        .catch(error => {
            console.error('Ошибка при получении питомцев:', error);
        });
});