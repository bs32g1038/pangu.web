import axios from '../utils/axios';

export const fetchReplyList = (page = 1, limit = 100, filter = {}) => {
    return axios.get('/v1/api/replyList', {
        page,
        limit,
        topicId: filter.topicId,
    });
};
