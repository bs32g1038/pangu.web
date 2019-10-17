import axios from '../utils/axios';

export const follow = data => {
    return axios.post('/v1/api/follows', data);
};

export const cancelFollow = data => {
    return axios.post('/v1/api/cancel-follow', data);
};
