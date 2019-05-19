import React from 'react';

import './leadLeft.css';

import ScoreCard from '../scoreCard/scoreCard';
import LeadBox from '../leadBox/leadBox';
import Chart from '../chart/chart';

const dashLeft = (props) => {
    const salesGrowth = (props.monthData.Sales - props.monthData.Objective) / props.monthData.Objective;
    const foodCost = props.monthData.FoodCost / props.monthData.Sales * 100;
    const laborCost = props.monthData.LaborCost / props.monthData.Sales * 100;
    return (
        <div className='leadLeft'>
            <LeadBox title='Overall Month overview'>
                <ScoreCard name='Sales Y-1' unit='$' score={props.monthData.Objective}/>
                <ScoreCard name='Sales' unit='$' score={props.monthData.Sales}/>
                <ScoreCard name='Growth' unit='%' score={salesGrowth} down={0}/>
                <ScoreCard name='Catering' unit='$' score={props.monthData.Catering}/>
                <ScoreCard name='Food Cost' unit='%' score={foodCost} up={0.23} down={0.21}/>
                <ScoreCard name='Labor Cost' unit='%' score={laborCost}/>
            </LeadBox>
            <Chart
                title='Overall Sales Graph ($)'
                data={props.data}
                month={props.monthData.Month}/>
        </div>
    );
};

export default dashLeft;