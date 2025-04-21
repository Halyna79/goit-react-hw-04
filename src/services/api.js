import axios from "axios";

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = '-1ieqpKjm8_OSz6_4-G0Pf3OJhJ7AAJ00hfgeeBFLy0';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;

export const getImages = async (search, page) => {
    const params = {
        query: search,
        page,
        orientation: 'landscape',
    };
    const response = await axios.get('/search/photos', { params });
    return response.data;
}