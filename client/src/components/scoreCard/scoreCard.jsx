import React from 'react';

import './scoreCard.css';

const scoreCard = (props) => {
// scorecard function which creates a styled components depending on KPI type
//parameters (up, down = (int) threshold for score type)
// score(int) value to display
// unit (str) score unit to display
console.log(props.score)
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
        // function formats dollar amounts with comas(ex: 10000 => 10,000)
        // parameter: x (int) amount format
        // returns formatted x formatted (str)
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
    if (props.name === 'Growth' && props.score !== 0) {
        image = <img src={arrowUrl} alt='arrow' className='arrow'/>;
        if (props.score > 0) {
            body = '+' + body;
            classes = 'score green';
        }
    }

    if (props.name === 'Bonus' && props.score > 0) {
            classes = 'score green';
        }

    if (typeof(props.score) !== "string" && typeof(props.score) !== "number" ){
        classes = 'score';
        body = 'No Data';
        image = null;
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