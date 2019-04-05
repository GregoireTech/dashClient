import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

import {getMonthIndex, getMonthName} from '../../helpers/monthMappingTable';
import './chart.css';

const SimpleLineChart = (props) => {

    const setData = () => {
        let data = [];
        const selectedMonth = props.month.split(" ")[0];
        const selectedYear = parseInt(props.month.split(" ")[1]);
        let tmpMonthIndex = getMonthIndex(selectedMonth);
        let tmpYear = selectedYear - 1;
        while((tmpMonthIndex <= getMonthIndex(selectedMonth) && tmpYear <= selectedYear) || (tmpYear < selectedYear) ){
            if (tmpMonthIndex > 12) {
                tmpMonthIndex = 1;
                tmpYear ++;
            }
            //console.log(tmpMonthIndex)
            const tmpMonthYear = `${getMonthName(tmpMonthIndex)} ${tmpYear}`;
            const tmpPrevMonthYear = `${getMonthName(tmpMonthIndex)} ${tmpYear -1}`;
            data.push({
                name: getMonthName(tmpMonthIndex),
                y1: Math.round(props.data[tmpMonthYear].Sales),
                y0: Math.round(props.data[tmpPrevMonthYear].Sales)
            });
            tmpMonthIndex ++;
        }
        return data;
    }

    const setMinMax = (data) =>{
        let dataArray = [];
        for (let i = 0; i<data.length; i++){
            if (data[i].y1 !== '') {dataArray.push(data[i].y1)};
            if (data[i].y0 !== '') {dataArray.push(data[i].y0)};
        }
        const yMax = Math.round((Math.max.apply(null, dataArray)*1.1)/10000)*10000;
        const yMin = Math.round((Math.min.apply(null, dataArray)*0.9)/10000)*10000;

        return [yMin, yMax];
    }

    let data = [];
    try {
        data = setData();
    } catch (e) {
        console.log(e)
    }

    const range = setMinMax(data);
    
    return (
        <div id="chart" className='chart'>
            <h2 className='chart-title'>{props.title}</h2>
            <div className='chart-body'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                        <XAxis dataKey="name"/>
                        <YAxis domain={[range[0],range[1]]}/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip className='custom-tooltip' />
                        <Legend/>
                        <Line
                            name='Last year'
                            type="monotone"
                            dataKey="y0"
                            stroke="#8884d8"
                            activeDot={{
                            r: 8
                        }}/>
                        <Line name='This Year' type="monotone" dataKey="y1" stroke="#749099"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SimpleLineChart;