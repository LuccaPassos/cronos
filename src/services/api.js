import axios from 'axios';
const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/LuccaPassos/cronos'
});

export default api;