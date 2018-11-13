import React from 'react';

import './dashRight.css';

import ScoreCard from '../scoreCard/scoreCard';
import Box from '../box/box';

const dashRight = (props) => {
    return (
        <div className='right'>
            <Box title='Sales Overview'>
                <ScoreCard name='Sales' unit='$' score={props.monthData.Sales} />
                <ScoreCard name='Growth' unit='%' score={props.monthData.Growth} down={0} />
                <ScoreCard name='Bonus' unit='$' score={props.monthData.Bonus} />
            </Box>
            <Box title='Catering Overview'>
                <ScoreCard name='Catering' unit='$' score={props.monthData.Catering} />
                <ScoreCard name='Catering Ratio' unit='%' score={props.monthData.CateringP} />
                <ScoreCard name='Catering YTD' unit='$' score={props.monthData.CateringYTD} />
            </Box>
            <Box title='Costs Overview'>
                <ScoreCard name='Food Cost' unit='%' score={props.monthData.FoodCostP} up={0.22} down={0.20} />
                <ScoreCard name='Labor Cost' unit='%' score={props.monthData.LaborCostP} />
                <ScoreCard name='Overrings' unit='$' score={props.monthData.Overrings} />
                <ScoreCard name='Sampling' unit='$' score={props.monthData.Sampling} />
            </Box>
        </div>
    );
};

export default dashRight;