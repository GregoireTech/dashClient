import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helpers/utility';

const initialState = {
    monthData: null,
    data: null,
    selectedMonth: null,
    loading: false,
    error: false
};

const getDataStart = (state) => {
    return updateObject(state, {error: null, loading:true});
};

const getDataSuccess = (state, action) => {
    return updateObject(state, { 
        error: null, 
        loading: false,
        data: action.payload.data,
        monthData: action.payload.monthData,
        selectedMonth: action.payload.selectedMonth
    });
};

const getDataFailed = (state, action) => {
    return updateObject(state, {
        loading:false, 
        error: action.payload
    });
};

const setMonthDataStart = (state) => {
    return updateObject(state, {error: null, loading:true});
}

const setMonthDataSuccess = (state, action) => {
    return updateObject(state, { 
        error: null, 
        loading: false,
        selectedMonth: action.payload.selectedMonth,
        monthData: action.payload.monthData
    });
}

const setMonthDataFailed = (state, action) => {
    return updateObject(state, {
        loading:false, 
        error: action.error
    });           
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_DATA_START:return getDataStart(state);
        case actionTypes.GET_DATA_SUCCESS: return getDataSuccess(state,action);
        case actionTypes.GET_DATA_FAILED: return getDataFailed(state, action);
        case actionTypes.SET_MONTH_DATA_START: return setMonthDataStart(state);
        case actionTypes.SET_MONTH_DATA_SUCCESS: return setMonthDataSuccess(state, action);
        case actionTypes.SET_MONTH_DATA_FAILED: return setMonthDataFailed(state, action);
        default: return state;
    }

}

export default reducer;

/*
const setInitialDate = () => {
    let date = new Date();
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const month = getMonthName(monthIndex);
    date = month + ' ' + JSON.stringify(year);
    return date;
}

const dateChangedHandler = (event) => {
    return setMonthData(event.target.value);
}

setMonthData = (month) => {
    let data = {};
    if (this.state.user !== 'Leadership' && this.state.data[month]) {
            this.setState({
                monthData: this.state.data[month]
            });
        
    } else if (this.state.user === 'Leadership' && this.state.data['Leadership']) {
        for (const key in this.state.data) {
            const dataItem = this.state.data[key];
            console.log('in leadership' + dataItem)
            data[dataItem[month].Company] = dataItem[month];
        }
        this.setState({
            monthData: data
        });
    }
}
*/