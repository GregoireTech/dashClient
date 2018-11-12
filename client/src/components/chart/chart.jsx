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

import './chart.css';

const SimpleLineChart = (props) => {

    const getIndex = () => {
        for (var i = 0; i < props.data.length; i++) {
            if (props.data[i].Month === props.month) {
                return i;
            }
        }
    }

    const setData = () => {
        let data = [];
        let index = getIndex();
        let startIndex = index - 5;
        for (var ii = startIndex; ii<= index; ii++){
            let monthName = props.data[ii].Month.substring(0,3);
            data.push({
                name: monthName,
                y1: Math.round(props.data[ii].Sales),
                y0: Math.round(props.data[ii-12].Sales)
            });
        }
        return data;
    }

    const setMinMax = (data) =>{
        let dataArray = [];
        for (let i = 0; i<data.length; i++){
            data[i].y1 !== '' ? dataArray.push(data[i].y1) : null;
            data[i].y0 !== '' ? dataArray.push(data[i].y0) : null;
        }
        const yMax = Math.round((Math.max.apply(null, dataArray)*1.1)/10000)*10000;
        const yMin = Math.round((Math.min.apply(null, dataArray)*0.9)/10000)*10000;

        return [yMin, yMax];
    }

    const data = setData();
    const range = setMinMax(data);
    
    return (
        <div className='chart'>
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