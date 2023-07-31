import axios from 'axios';

const apiURL = axios.create({
  baseURL: 'https://ecommerceapp-dhxl.onrender.com',
});

export default apiURL;
