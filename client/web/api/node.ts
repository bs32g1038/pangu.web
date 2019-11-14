import axios from '@pangu/client/web/utils/axios';

export const fetchNodes = () => {
    return axios.get('/v1/api/nodes');
};

export const fetchNodeById = id => {
    return axios.get('/v1/api/nodes/' + id);
};

export const createNode = data => {
    return axios.post('/v1/api/nodes', data);
};

export const updateNode = data => {
    return axios.put('/v1/api/nodes', data);
};
