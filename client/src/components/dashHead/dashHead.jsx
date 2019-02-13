import React from 'react';
import './dashHead.css'

import {months} from '../../assets/data';
import Input from '../Input/Input';

const dashHead = (props) => {

    const logoUrl = require('../../assets/images/logo.svg');

    return (
        <div id='head' className='dashHead'>
            <div className='logo-container'>
                <img src={logoUrl} className='logo' alt="Jimmy John's logo"/>
            </div>
            <div className='dashboard-title'>{props.name} Monthly Activity Report</div>
            <div className='date-picker'>
                <Input className='date-select' inputType='select' options={months} changed={props.dateChanged} default={props.defMonth} />
            </div>
        </div>
    );
};

export default dashHead;