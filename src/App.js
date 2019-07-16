import React, {
    Component
} from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import * as actions from './store/actions/index';

import Auth from './pages/Auth/Auth';
import Leadership from './pages/Leadership/Leadership';
import Manager from './pages/Dashboard/Dashboard';
import WriteUp from './pages/WriteUp/WriteUp';
import Candidate from './pages/Candidate/Candidate';
import Spinner from './components/UI/Spinner/spinner';
import Layout from './hoc/Layout/Layout';
import Logout from './pages/Auth/Logout/Logout';

import {getMonthName} from './helpers/monthMappingTable';
class App extends Component {
    state = {
        loaded: false,
        data: null,
        monthData: null
    };



    render() {
        let dashboard = null;
        if (this.props.isAuthenticated){
            if (this.state.user === 'Leadership') {
                dashboard = <Leadership
                                dateChanged = {this.dateChangedHandler.bind(this)}
                                leadData = {this.state.data['Leadership']}
                                monthData = {this.state.monthData}
                                defMonth = {this.setInitialDate()} />;
            } else {
                dashboard = <Manager
                                dateChanged = {this.dateChangedHandler.bind(this)}
                                location = {this.state.user}
                                data = {this.state.data}
                                monthData = {this.state.monthData}
                                defMonth = {this.setInitialDate()} />;
            }
        }
        let routes = (
            <Switch>
                <Route path='/' component={Auth} />
                <Redirect to='/'/>
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path='/auth' component={Auth} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/dashboard' component={dashboard} />
                    <Route path='/new-candidate' exact component={Candidate} />
                    <Route path='/write-up' exact component={WriteUp} />
                    <Redirect to='/' />
                </Switch>
            );
        }
        return (
            <Layout>
                {routes}
            </Layout>
        );
    }

}

const mapstateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};


export default withRouter(connect(mapstateToProps, mapDispatchToProps)(App));
