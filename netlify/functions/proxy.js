const fetch = require('node-fetch');  // Импортируем fetch для выполнения HTTP запросов

exports.handler = async (event, context) => {
  const apiUrl = 'https://helppets.infy.uk/wp-json/wp/v2/posts';  // URL WordPress API
  
  try {
    // Отправляем GET запрос к API WordPress
    const response = await fetch(apiUrl);
    
    // Проверка, если ответ успешный
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: `Ошибка запроса к WordPress API. Статус: ${response.status} `})
      };
    }
    
    // Если запрос успешный, получаем данные
    const data = await response.json();
    console.log(data);
    
    
    // Возвращаем успешный ответ с данными
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    // Обрабатываем возможные ошибки запроса
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Ошибка сервера', error: error.message })
    };
  }
};