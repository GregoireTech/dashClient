import React from 'react';
import './box.css';

const box = (props) => {
    return (
        <div id={props.name} className='box'>
            <h2 className='box-title'>{props.title}</h2>
            <div className='box-body'>
                {props.children}
            </div>
        </div>
    );
};

export default box