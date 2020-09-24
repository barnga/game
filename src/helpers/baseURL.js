const baseURL = process.env.NODE_ENV === 'production' ? 'wss://barnga-api.herokuapp.com' : 'http://localhost:3000';

export default baseURL;
