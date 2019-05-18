import React from 'react';

import './spinner.css';

const spinner = (props) => {
    return (
        <div className='spinner-container'>
            <div className='spinner'>
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <h3 className='spinner-title'>{props.title}</h3>
        </div>
    );
};

export default spinner;
