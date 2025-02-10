import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers:{
        'Content-Type': 'application/json'
    }
});

export const get = (url, params)=> api.get(url, {params});
export const post = (url, data)=> api.post(url, data);
export const put = (url, data)=> api.put(url, data);
export const del = (url)=> api.delete(url);