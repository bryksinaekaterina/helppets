const handler = async (event, context) => {
    const fetch = (...args) =>
      import('node-fetch').then(({ default: fetch }) => fetch(...args));
  
    const https = require('https');
    const agent = new https.Agent({
      rejectUnauthorized: false, // Игнорируем ошибки сертификатов
    });
  
    const url = 'https://helppets.infy.uk/wp-json/wp/v2/posts';
  
    try {
      const response = await fetch(url, { agent });
  
      if (!response.ok) {
        throw new Error(`Ошибка при получении данных: ${response.statusText}`);
      }
  
      const posts = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(posts),
      };
    } catch (error) {
      console.error('Ошибка:', error.message);
  
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error fetching posts', error: error.message }),
      };
    }
  };
  
  exports.handler = handler;