import axios from '@pangu/client/admin/utils/axios';

export const fetchNodes = (page = 1, limit = 10) => {
    return axios.get('/v1/api/nodes', {
        params: {
            page,
            limit,
        },
    });
};
