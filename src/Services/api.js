import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const API_CONNECTION = process.env.API_CONNECTION

const AUTH_TOKEN = AsyncStorage.getItem('TOKEN')
const AUTH_TOKEN_ADMIN = AsyncStorage.getItem('TOKENADMIN')

const api = axios.create({
    baseURL: API_CONNECTION,
    headers: {
        //Authorization: `Bearer ${AUTH_TOKEN ? AUTH_TOKEN : AUTH_TOKEN_ADMIN}`
    }
});

export default api;