import React from 'react';

import './scoreCard.css';

const scoreCard = (props) => {

    let classes = 'score';
    let arrowUrl = require('../../assets/images/up.svg');

    if (props.up) {
        if (props.score > props.up) {
            classes = 'score unvalid';
        };
    };
    if (props.down !== undefined) {
        if (props.score < props.down) {
            classes = 'score unvalid';
            arrowUrl = require('../../assets/images/down.svg');
        };
    };

    let value = props.score

    if (props.unit === '%') {
        value = value * 100;
        value = parseFloat(Math.round(value * 100) / 100).toFixed(1);
    }

    const numberWithCommas = (x) => {
        return x
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let body = value + ' ' + props.unit;
    if (props.unit === '$') {
        value = parseFloat(Math.round(value * 100) / 100).toFixed(0);
        value = numberWithCommas(value);
        body = props.unit + ' ' + value
    }

    let image = null;
    if (props.name === 'Comp' && props.score !== 0) {
        image = <img src={arrowUrl} alt='arrow' className='arrow'/>;
        if (props.score > 0) {
            body = '+' + body;
            classes = 'score green';
        }
    }

    if (props.name === 'Bonus' && props.score > 0) {
            classes = 'score green';
        }


    return (
        <div className='scoreCard'>
            <h3 className='score-title'>{props.name}</h3>
            <span className='score-container'>
                {image}<p className={classes}>
                    {body}
                </p>
            </span>
        </div>

    );
};

export default scoreCard;