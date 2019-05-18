import React from 'react';
import './leadBox.css';

const leadBox = (props) => {
    return (
        <div className='leadBox'>
            <h2 className='leadBox-title'>{props.title}</h2>
            <div className='leadBox-body'>
                {props.children}
            </div>
        </div>
    );
};

export default leadBox;