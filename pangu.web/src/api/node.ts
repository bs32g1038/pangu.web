import axios from '../utils/axios';

export const fetchCategories = () => {
    return axios.get('/v1/api/categories');
};

export const fetchTags = () => {
    return axios.get('/v1/api/tags');
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
