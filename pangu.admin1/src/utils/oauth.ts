const key = 'pangushequ@163.com';

export const setLoginInfo = loginInfo => {
    if (Object.prototype.toString.call(loginInfo) !== '[object Object]') {
        throw new Error('loginInfo must be an object');
    }
    window.localStorage.setItem(key, JSON.stringify(loginInfo));
};

export const getLoginInfo = () => {
    if (typeof window === 'undefined') {
        return {};
    }
    const loginInfo = window.localStorage.getItem(key);
    if (loginInfo) {
        return JSON.parse(loginInfo);
    }
    return null;
};

export const getTokenFromLoginInfo = () => {
    const info = getLoginInfo();
    if (info) {
        return info.token;
    }
    return '';
};

export const isLogin = () => {
    if (typeof window !== 'undefined') {
        return getTokenFromLoginInfo() ? true : false;
    }
    return false;
};
