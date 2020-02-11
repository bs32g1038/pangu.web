import axios from 'axios';
import router from 'next/router';
const baseUrl = 'http://127.0.0.1:3000';
const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});
instance.defaults.timeout = 5000;
instance.defaults.withCredentials = true;
instance.interceptors.request.use(
    function(c) {
        // const userInfo = getLoginInfo();
        // if (!(c.url.includes('getFirstLoginInfo') || c.url.includes('login'))) {
        //     if (!token) {
        //         history.push('/user/login');
        //     }
        // }
        // c.headers.authorization = (userInfo && userInfo.token) || '';
        return c;
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
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    router.push('/login');
                    break;
                case 403:
                    router.push('/login');
                    break;
                default:
                    break;
            }
            return Promise.reject(error.response);
        }
        return Promise.reject(error);
    }
);

export default instance;
