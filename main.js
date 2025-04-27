fetch('http://helppets.infy.uk/wp-json/wp/v2/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(posts => {
    console.log(posts)
  })
  .catch(error => {
    console.error('Ошибка при получении записей:', error);
  });