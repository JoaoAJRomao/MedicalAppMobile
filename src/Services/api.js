import axios from 'axios';

const API_CONNECTION = process.env.API_CONNECTION

const api = axios.create({
    baseURL: API_CONNECTION,
    headers: {
        // Authorization: `Bearer ${AUTH_TOKEN ? AUTH_TOKEN : AUTH_TOKEN_ADMIN}`
    }
});

export default api;