import axios from 'axios';
axios.defaults.withCredentials = true;
const http = axios.create({
    baseURL:"http://localhost:0925",
})

http.interceptors.response.use(rep => {
    return rep;
})

export {
    http
}