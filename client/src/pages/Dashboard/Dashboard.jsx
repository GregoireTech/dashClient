import React from 'react';

import Header from '../../components/dashHead/dashHead';
import Chart from '../../components/chart/chart';
import ScoreCard from '../../components/scoreCard/scoreCard';
import Box from '../../components/box/box';
import './Dashboard.css';

const dashboard = (props) => {
    //console.log(props)
    return (
        <div className='Dashboard' id='Dashboard'>
            <Header
                name={props.location}
                defMonth={props.defMonth}
                dateChanged={props.dateChanged} />
            {/* <Box name='evaluation' title='Evaluation'>
                <ScoreCard name='Date' unit='' score={props.monthData.EvaluationDate} />
                <ScoreCard name='Score' unit='%' score={props.monthData.LastScoreP} down={93.75} />
            </Box> */}
            <Chart title='Sales Graph ($)' data={props.data} month={props.monthData.Month} />
            
            <Box name='sales' title='Sales Overview'>
                <ScoreCard name='Sales' unit='$' score={props.monthData.Sales} />
                <ScoreCard name='Growth' unit='%' score={props.monthData.Growth} down={0} />
                <ScoreCard name='Bonus' unit='$' score={props.monthData.Bonus} />
            </Box>
            
            <Box name='catering' title='Catering Overview'>
                <ScoreCard name='Catering' unit='$' score={props.monthData.Catering} />
                <ScoreCard name='Catering Ratio' unit='%' score={props.monthData.CateringP} />
                <ScoreCard name='Catering YTD' unit='$' score={props.monthData.CateringYTD} />
            </Box>
            
            <Box name='costs' title='Costs Overview'>
                <ScoreCard name='Food Cost' unit='%' score={props.monthData.FoodCostP} up={0.22} down={0.20} />
                <ScoreCard name='Labor Cost' unit='%' score={props.monthData.LaborCostP} />
                <ScoreCard name='Sampling' unit='$' score={props.monthData.Sampling} />
            </Box> 
        
        </div>

    )
}

export default dashboard;