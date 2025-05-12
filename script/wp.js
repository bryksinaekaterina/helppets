document.addEventListener('DOMContentLoaded', function() {
    fetch('https://help-pets.uz/wp-json/wp/v2/pages?slug=добро-пожаловать')
      .then(response => response.json())
      .then(pages => {
        if (pages.length > 0) {
          const welcomePage = pages[0];
          const contentDiv = document.getElementById('wordpress-content');
          contentDiv.innerHTML = `<h2>${welcomePage.title.rendered}</h2>${welcomePage.content.rendered}`;
        } else {
          const contentDiv = document.getElementById('wordpress-content');
          contentDiv.innerText = 'Контент не найден.';
        }
      })
      .catch(error => {
        console.error('Ошибка при получении данных из WordPress:', error);
        const contentDiv = document.getElementById('wordpress-content');
        contentDiv.innerText = 'Произошла ошибка при загрузке контента.';
      });
  });