const fetch = require('node-fetch');  // Импортируем fetch для выполнения HTTP запросов

exports.handler = async (event, context) => {
  // URL, на который будем отправлять запросы (WordPress API)
  const apiUrl = 'https://helppets.infy.uk/wp-json/wp/v2/posts';
  
  try {
    // Отправляем GET запрос к API WordPress
    const response = await fetch(apiUrl);
    
    // Проверяем статус ответа
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: 'Ошибка запроса к WordPress API' })
      };
    }
    
    // Получаем данные из ответа
    const data = await response.json();
    
    // Возвращаем полученные данные в качестве ответа функции
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    // В случае ошибки возвращаем сообщение об ошибке
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Ошибка сервера', error: error.message })
    };
  }
};