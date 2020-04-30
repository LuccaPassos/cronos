import axios from 'axios';
const api = axios.create({
    baseURL: 'http://jacee-api.herokuapp.com'
});

export default api;