import axios from '@pangu/client/web/utils/axios';

export const fetchTopicList = () => {
    return axios.get('/v1/api/topics');
};

export const fetchTopicListByUserId = userId => {
    return axios.get('/v1/api/topics', {
        params: {
            userId,
        },
    });
};

export const fetchTopicById = id => {
    return axios.get('/v1/api/topics/' + id);
};

export const createTopic = data => {
    return axios.post('/v1/api/topics', data);
};

export const updateTopic = data => {
    return axios.put('/v1/api/topics', data);
};

export const getCollectTopic = data => {
    return axios.get('/v1/api/collect-topic', data);
};
