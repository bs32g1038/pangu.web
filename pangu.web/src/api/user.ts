import axios from '../utils/axios';

export const getUserByUserId = userId => {
    return axios.get('/v1/api/getUserByUserId', {
        params: {
            id: userId,
        },
    });
};

export const getUserByUserAccount = account => {
    return axios.get('/v1/api/getUserByUserAccount', {
        params: {
            account,
        },
    });
};

export const fetchUserList = () => {
    return axios.get('/v1/api/users');
};

export const fetchFollowUsers = (page = 1, limit = 100, filter: { userId?: string } = {}) => {
    return axios.get('/v1/api/follow-user', {
        params: {
            page,
            limit,
            userId: filter.userId,
        },
    });
};

export const fetchFollowingUsers = (page = 1, limit = 100, filter: { followUserId?: string } = {}) => {
    return axios.get('/v1/api/following-user', {
        params: {
            page,
            limit,
            followUserId: filter.followUserId,
        },
    });
};

export const fetchLoginStatus = () => {
    return axios.post('/v1/api/isLogin');
};

export const logout = () => {
    return axios.post('/v1/api/user/logout');
};
