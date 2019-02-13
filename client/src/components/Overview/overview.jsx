import React from 'react';

import './overview.css';
import Aux from '../../hoc/Auxiliary';

import ScoreCard from '../scoreCard/scoreCard';
import LeadBox from '../leadBox/leadBox';
import Chart from '../chart/chart';

const dashLeft = (props) => {
    return (
        <Aux>
            <LeadBox title='Month overview'>
                <ScoreCard name='Sales' unit='$' score={props.monthData.Sales}/>
                <ScoreCard name='Growth' unit='%' score={props.monthData.Growth} down={0}/>
                <ScoreCard name='Bonus' unit='$' score={props.monthData.Bonus} />
                <ScoreCard name='Catering' unit='$' score={props.monthData.Catering}/>
                <ScoreCard name='Food Cost' unit='%' score={props.monthData.FoodCostP} up={0.23} down={0.21}/>
                <ScoreCard name='Labor Cost' unit='%' score={props.monthData.LaborCostP}/>
            </LeadBox>
            <Chart
                title='Overall Sales Graph ($)'
                data={props.data}
                month={props.monthData.Month}/>
        </Aux>
    );
};

export default dashLeft;