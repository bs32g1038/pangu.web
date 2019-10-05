import axios from 'axios';
let baseUrl = 'http://127.0.0.1:7001';
const instance = axios.create({
    baseURL: baseUrl,
});
instance.defaults.timeout = 5000;

instance.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default instance;
