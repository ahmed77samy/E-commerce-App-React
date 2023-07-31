import axios from 'axios';

const apiURL = axios.create({
  baseURL: 'https://ecommerceapp11.onrender.com',
});

export default apiURL;
