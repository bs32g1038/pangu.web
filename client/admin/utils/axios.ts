import axios from 'axios';
const instance = axios.create({});
instance.defaults.timeout = 5000;

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
        return Promise.reject(error);
    }
);

export default instance;
