import axios from '../utils/axios';

export const getUserByUsername = username => {
    return axios.get('/v1/api/getUserByUsername', {
        params: {
            username,
        },
    });
};

export const fetchUserList = () => {
    return axios.get('/v1/api/users');
};
