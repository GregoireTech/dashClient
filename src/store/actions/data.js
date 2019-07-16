import * as actionTypes from './actionTypes';
import axios from 'axios';

import { getDataUrl } from '../../helpers/axios';

export const getDataStart = () => {
    return {
        type: actionTypes.GET_DATA_START
    };
};

export const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        payload: data
    };
};

export const getDataFailed = (error) => {
    return {
        type: actionTypes.GET_DATA_FAILED,
        error: error
    };
};


export const getData = (username, token) => {
    console.log('IN GET DATA')
    return dispatch => {
        dispatch(getDataStart());
        const dataUrl = getDataUrl(token);
        console.log(dataUrl)
        axios.get(dataUrl)
        .then(response => {
            console.log(response)
            const resData = response.data;
            let valid = true;
            if(response.status !== 200){
                valid = false;
            }
            if(resData.data && resData.data !== []){
                valid = false;
            }
            if (valid){
                dispatch(getDataSuccess(response.data.data));
                //dispatch(checkgetDataTimeout(response.data.expiresIn));
            } else {
                    dispatch(getDataFailed('error is data fetching unknown'));
            } 
        })
        .catch(err =>  {
            console.log(err)
            //dispatch(getDataFailed(err.response.data.error));
        });
    }
};


const getMonthData = (data, month, username) => {
    if (username !== 'Leadership' && data[month]) {
        return data[month];
        
    } else if (username === 'Leadership' && data['Leadership']) {
        let newData = {};
        for (const key in data) {
            const dataItem = data[key];
            console.log('in leadership' + dataItem)
            newData[dataItem[month].Company] = dataItem[month];
        }
        return data;
    }
}