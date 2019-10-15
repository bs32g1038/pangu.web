import axios from '../utils/axios';

export const fetchReplyList = (page = 1, limit = 100, filter = {}) => {
    return axios.get('/v1/api/replyList', {
        params: {
            page,
            limit,
            topicId: filter.topicId,
        },
    });
};

export const fetchReplyTopicList = (page = 1, limit = 100, filter = {}) => {
    return axios.get('/v1/api/replyTopicList', {
        params: {
            page,
            limit,
            userId: filter.userId,
        },
    });
};
