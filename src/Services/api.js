import axios from 'axios';

const api = axios.create({
    baseURL: REACT_APP_API_CONNECTION,
    headers: {
        Authorization: `Bearer ${AUTH_TOKEN ? AUTH_TOKEN : AUTH_TOKEN_ADMIN}`
    }
},);

export default api;