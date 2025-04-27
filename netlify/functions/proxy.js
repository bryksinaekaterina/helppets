const handler = async (event, context) => {
    const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
  
    const url = 'https://helppets.infy.uk/wp-json/wp/v2/posts';
  
    try {
      const response = await fetch(url);
      const posts = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(posts),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error fetching posts', error: error.message }),
      };
    }
  };
  
exports.handler = handler;