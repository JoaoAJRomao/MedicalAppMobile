import axios from 'axios';
const REACT_APP_API_CONNECTION = process.env.APP_API_CONNECTION

const api = axios.create({
    baseURL: REACT_APP_API_CONNECTION,
    headers: {
        // Authorization: `Bearer ${AUTH_TOKEN ? AUTH_TOKEN : AUTH_TOKEN_ADMIN}`
    }
},);

export default api;