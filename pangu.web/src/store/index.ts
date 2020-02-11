import { createStore, combineReducers, createSlice, PayloadAction, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as api from '../api/user';

interface State {
    isLogin: boolean;
    loading: boolean;
    error: string | null;
}

interface DataLoaded {
    isLogin: boolean;
}

const initialState: State = {
    isLogin: false,
    loading: false,
    error: null,
};

const global = createSlice({
    name: 'global',
    initialState,
    reducers: {
        getLoginStatus(state, action: PayloadAction<DataLoaded>) {
            const { isLogin } = action.payload;
            state.isLogin = isLogin;
        },
        getLogoutStatus(state, action: PayloadAction<DataLoaded>) {
            const { isLogin } = action.payload;
            state.isLogin = isLogin;
        },
    },
});

export const { getLoginStatus, getLogoutStatus } = global.actions;

/**
 * 获取登录状态
 */
export const fetchLoginStatus = () => async dispatch => {
    const res = await api.fetchLoginStatus();
    return dispatch(getLoginStatus({ isLogin: res.data.data }));
};

/**
 * 注销登录
 */
export const postLogout = () => async dispatch => {
    const res = await api.logout();
    return dispatch(getLogoutStatus({ isLogin: !res.data.data }));
};

const rootReducer = combineReducers({
    $global: global.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function initializeStore(_initialState: any = initialState) {
    return createStore(rootReducer, _initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
