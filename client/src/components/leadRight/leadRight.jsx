import React from 'react';

import './leadRight.css';

import ScoreCard from '../scoreCard/scoreCard';
import LeadItem from '../leadItem/leadItem';

const dashRight = (props) => {

    
    const monthData = props.monthData.splice(1, 6);

    let items = monthData.map((restaurant, index) => 
    <LeadItem title={restaurant.name} key={index}>
        <ScoreCard name='Sales' unit='$' score={restaurant.data.Sales}/>
        <ScoreCard name='Growth' unit='%' score={restaurant.data.Growth} down={0}/>
        <ScoreCard name='Catering' unit='$' score={restaurant.data.Catering}/>
        <ScoreCard name='Food Cost' unit='%' score={restaurant.data.FoodCostP}up={0.22} down={0.20}/>
        <ScoreCard name='Labor Cost' unit='%' score={restaurant.data.LaborCostP}/>
    </LeadItem>
    );

    return (
        <div className='leadRight'>
        {items}
        </div>
    );
};

export default dashRight;