import React from 'react';

import './leadRight.css';

import ScoreCard from '../scoreCard/scoreCard';
import LeadItem from '../leadItem/leadItem';

const dashRight = (props) => {

    let items = [];
    for (const restaurant in props.monthData) {
        const restaurantData = props.monthData[restaurant];
        if (restaurant !== 'Leadership'){
        items.push(
            <LeadItem title={restaurant} key={items.length + 'key'}>
                <ScoreCard name='Objective' unit='$' score={restaurantData.Objective}/>
                <ScoreCard name='Sales' unit='$' score={restaurantData.Sales}/>
                <ScoreCard name='Growth' unit='%' score={restaurantData.Growth} down={0}/>
                <ScoreCard name='Catering' unit='$' score={restaurantData.Catering}/>
                <ScoreCard name='Food Cost' unit='%' score={restaurantData.FoodCostP}up={0.23} down={0.21}/>
                <ScoreCard name='Labor Cost' unit='%' score={restaurantData.LaborCostP}/>
            </LeadItem>
            );
        }
    }
    return (
        <div className='leadRight'>
        {items}
        </div>
    );
};

export default dashRight;