import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `http://localhost:8086/`,
    headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem('token'))
    }
});
