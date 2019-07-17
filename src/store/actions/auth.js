import * as actionTypes from './actionTypes';
import axios from 'axios';

import { getLoginUrl } from '../../helpers/axios';
import { getData } from './data';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (username, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            username: username,
            token: token
        } 
    };
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    };
};


export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime*1000);
    };
};

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (username, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const loginUrl = getLoginUrl(username, password);
        //console.log(loginUrl)
        axios.get(loginUrl)
        .then(response => {
            console.log(response)
            const resData = response.data;
            let valid = true;
            if(response.status !== 200){
                valid = false;
            }
            if(resData.authStatus !== true){
                valid = false;
            }
            if (valid){
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn*1000) 
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', expirationDate );
                dispatch(authSuccess(username, response.data.token));
                dispatch(getData(username, response.data.token));
                //dispatch(checkAuthTimeout(response.data.expiresIn));
            } else {
                    dispatch(authFailed('error is login unknown'));
            } 
        })
        .catch(err =>  {
            console.log(err)
            //dispatch(authFailed(err.response.data.error));
        });
    }
};

export const setAuthRedirectPath = (path) => {
    return{
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getSeconds() - new Date().getSeconds())*1000));
                
            }
        }
    }
}