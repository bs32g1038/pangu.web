import axios from '../utils/axios';

export const fetchNodes = (page = 1, limit = 10) => {
    return axios.get('/v1/api/nodes', {
        params: {
            page,
            limit,
        },
    });
};

export const fetchNodeById = id => {
    return axios.get('/v1/api/nodes/' + id);
};

export const createNode = data => {
    return axios.post('/v1/api/nodes', data);
};

export const updateNode = data => {
    return axios.put('/v1/api/nodes/' + data.id, data);
};
