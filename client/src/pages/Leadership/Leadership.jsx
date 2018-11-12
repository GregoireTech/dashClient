import React, {Component} from 'react';

import Header from '../../components/dashHead/dashHead';
import Left from '../../components/leadLeft/leadLeft';
import Right from '../../components/leadRight/leadRight';
import './Leadership.css';

class Leadership extends Component {

    render() {
        return (
            <div className='leadboard'>
                <Header
                    name='Leadership'
                    defMonth={this.props.defMonth}
                    dateChanged={this.props.dateChanged}/>
                <div className='leadBody'>
                    <Left monthData={this.props.monthData[0].data}  data={this.props.leadData.data}/>
                    <Right monthData={this.props.monthData} />
                </div>
            </div>
        )
    }

}

export default Leadership