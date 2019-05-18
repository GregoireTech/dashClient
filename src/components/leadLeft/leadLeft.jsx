import React from 'react';

import './leadLeft.css';

import ScoreCard from '../scoreCard/scoreCard';
import LeadBox from '../leadBox/leadBox';
import Chart from '../chart/chart';

const dashLeft = (props) => {
    return (
        <div className='leadLeft'>
            <LeadBox title='Overall Month overview'>
                <ScoreCard name='Sales' unit='$' score={props.monthData.Sales}/>
                <ScoreCard name='Growth' unit='%' score={props.monthData.Growth} down={0}/>
                <ScoreCard name='Catering' unit='$' score={props.monthData.Catering}/>
                <ScoreCard name='Food Cost' unit='%' score={props.monthData.FoodCostP} up={0.23} down={0.21}/>
                <ScoreCard name='Labor Cost' unit='%' score={props.monthData.LaborCostP}/>
            </LeadBox>
            <Chart
                title='Overall Sales Graph ($)'
                data={props.data}
                month={props.monthData.Month}/>
        </div>
    );
};

export default dashLeft;