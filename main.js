fetch('/.netlify/functions/proxy')
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