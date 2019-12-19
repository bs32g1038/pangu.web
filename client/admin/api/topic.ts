import axios from '@pangu/client/admin/utils/axios';

export const fetchTopics = (page = 1, limit = 10) => {
    return axios.get('/v1/api/topics', {
        params: {
            page,
            limit,
        },
    });
};
