import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Header from '../../components/dashHead/dashHead';
import Chart from '../../components/chart/chart';
import ScoreCard from '../../components/scoreCard/scoreCard';
import Box from '../../components/box/box';
import './Dashboard.css';

class Dashboard extends Component {
    
    componentWillMount(){
        console.log('in dashboard');
    }
    render(){
        let body = null;
        if (this.props.data && this.props.monthData && this.props.selectedMonth){
            body = (<div className='Dashboard' id='Dashboard'>
                <Header
                    name={this.props.username}
                    defMonth={this.props.selectedMonth}
                    dateChanged={this.props.dateChanged} />
                {/* <Box name='evaluation' title='Evaluation'>
                    <ScoreCard name='Date' unit='' score={this.props.monthData.EvaluationDate} />
                    <ScoreCard name='Score' unit='%' score={this.props.monthData.LastScoreP} down={93.75} />
                </Box> */}
                <Chart title='Sales Graph ($)' data={this.props.data} month={this.props.monthData.Month} />
                
                <Box name='sales' title='Sales Overview'>
                    <ScoreCard name='Target' unit='$' score={this.props.monthData.Objective} />
                    <ScoreCard name='Sales' unit='$' score={this.props.monthData.Sales} />
                    <ScoreCard name='Growth' unit='%' score={this.props.monthData.Growth} down={0} />
                    <ScoreCard name='Bonus' unit='$' score={200 + this.props.monthData.Bonus} />
                </Box>
                
                <Box name='catering' title='Catering Overview'>
                    <ScoreCard name='Catering' unit='$' score={this.props.monthData.Catering} />
                    <ScoreCard name='Catering Growth' unit='%' score={this.props.monthData.CateringP} />
                    <ScoreCard name='Catering YTD' unit='$' score={this.props.monthData.CateringYTD} />
                </Box>
                
                <Box name='costs' title='Costs Overview'>
                    <ScoreCard name='Food Cost' unit='%' score={this.props.monthData.FoodCostP} up={0.22} down={0.20} />
                    <ScoreCard name='Labor Cost' unit='%' score={this.props.monthData.LaborCostP} />
                    <ScoreCard name='Sampling' unit='$' score={this.props.monthData.Sampling} />
                </Box> 
            
            </div>
        );
        
        }
                return body;
    }
}

const mapstateToProps = state => {
    return {
        username: state.auth.username,
        monthData: state.data.monthData,
        data: state.data.data,
        selectedMonth: state.data.selectedMonth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};


export default connect(mapstateToProps, mapDispatchToProps)(Dashboard);
