import React from 'react';

import './dashLeft.css';

import ScoreCard from '../scoreCard/scoreCard';
import Box from '../box/box';
import Chart from '../chart/chart';

const dashLeft = (props) => {
    return (
        <div className='left'>
            <Box title='Evaluation'>
                <ScoreCard name='Date' unit='' score={props.monthData.EvaluationDate}/>
                <ScoreCard name='Score' unit='%' score={props.monthData.LastScoreP}/>
            </Box>
                <Chart title='Sales Graph ($)' data={props.data} month={props.monthData.Month} />
        </div>
    );
};

export default dashLeft;