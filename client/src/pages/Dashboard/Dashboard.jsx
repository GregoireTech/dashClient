import React from 'react';

import Header from '../../components/dashHead/dashHead';
import Left from '../../components/dashLeft/dashLeft';
import Right from '../../components/dashRight/dashRight';
import './Dashboard.css';

const dashboard = (props) => {

    return (
        <div className='Dashboard'>
            <Header
                name={props.location}
                defMonth={props.defMonth}
                dateChanged={props.dateChanged}/>
            <div className='dashBody'>
                <Left monthData={props.monthData} data={props.data} month={props.month} />
                <Right monthData={props.monthData}/>
            </div>
        </div>
    )
}

export default dashboard;