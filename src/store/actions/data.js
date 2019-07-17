import * as actionTypes from './actionTypes';
import axios from 'axios';

import { getDataUrl } from '../../helpers/axios';
import { getMonthName } from '../../helpers/monthMappingTable';

export const getDataStart = () => {
    return {
        type: actionTypes.GET_DATA_START
    };
};

export const getDataSuccess = (data, monthData, selectedMonth) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        payload: {
            data: data,
            monthData: monthData,
            selectedMonth: selectedMonth
        }
    };
};

export const getDataFailed = (error) => {
    return {
        type: actionTypes.GET_DATA_FAILED,
        payload: error
    };
};


export const getData = (username, token) => {
    return dispatch => {
        dispatch(getDataStart());
        const dataUrl = getDataUrl(token);
        axios.get(dataUrl)
        .then(response => {
            console.log(response)
            const resData = response.data;
            let valid = true;
            if(response.status !== 200){
                valid = false;
            }
            if(resData.status !== true){
                valid = false;
            }
            if (valid){
                const selectedMonth = getDefaultSelectedMonth();
                const monthData = getMonthData(resData.data, selectedMonth, username);
                dispatch(getDataSuccess(resData.data, monthData, selectedMonth));
                //dispatch(checkgetDataTimeout(response.data.expiresIn));
            } else {
                    dispatch(getDataFailed('error is data fetching unknown'));
                } 
            })
            .catch(err =>  {
                console.log(err)
                dispatch(getDataFailed('error is data fetching unknown IN CATCH'));
        });
    }
};


const getDefaultSelectedMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const monthIndex = date.getMonth() + 1;
    const month = getMonthName(monthIndex);
    const month_year = month + ' ' + JSON.stringify(year);
    return month_year;
}

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
        return newData;
    }
}