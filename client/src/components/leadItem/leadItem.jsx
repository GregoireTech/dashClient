import React from 'react';

import './leadItem.css';



const leadItem = (props) => {
    return (
        <div className='leadItem'>
            <h2 className='leadItem-title'>{props.title}</h2>
            <div className='leadItem-body'>
                {props.children}
            </div>
        </div>
    );
};

export default leadItem;