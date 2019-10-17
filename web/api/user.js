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

export const fetchFollowUsers = (page = 1, limit = 100, filter = {}) => {
    return axios.get('/v1/api/follow-user', {
        params: {
            page,
            limit,
            userId: filter.userId,
        },
    });
};

export const fetchFollowingUsers = (page = 1, limit = 100, filter = {}) => {
    return axios.get('/v1/api/following-user', {
        params: {
            page,
            limit,
            followUserId: filter.followUserId,
        },
    });
};
