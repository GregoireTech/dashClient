import React, {
    Component
} from 'react';
//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';
import './App.css';

import axios from './assets/instances';
import AuthForm from './pages/authForm/authForm';
import Leadership from './pages/Leadership/Leadership';
import Dashboard from './pages/Dashboard/Dashboard';
import Spinner from './components/Spinner/spinner';
import Navbar from './components/navbar/navbar';
import Aux from './hoc/Auxiliary';
import {getMonthName} from './helpers/monthMappingTable';
class App extends Component {
    state = {
        isAuthed: false,
        user: null,
        loaded: false,
        data: null,
        monthData: null,
        token: null
    };

    setInitialDate() {
        let date = new Date();
        const year = date.getFullYear();
        const monthIndex = date.getMonth();
        const month = getMonthName(monthIndex);
        date = month + ' ' + JSON.stringify(year);
        return date;
    }

    usernameChanged(username) {
        this.setState({
            user: username
        })
    }

    dateChangedHandler(event) {
        this.setMonthData(event.target.value);
    }

    getData() {
        axios(this.state.token)
            .get()
            .then(response => {
                if (response.data.data && response.data.data !== []){
                    try {
                        this.setState({
                            data: response.data.data
                        });
                        this.setMonthData(this.setInitialDate());
                        this.setState({
                            loaded: true
                        });
                    } catch (e) {
                        console.log(e)
                        
                        this.setState({
                            loaded: true
                        });
                    }

                }
            })
            .catch(error => {
                this.setState({
                    loaded: true
                });
            });
    }

    setMonthData(month) {
        let data = {};
        if (this.state.user !== 'Leadership' && this.state.data[month]) {
                this.setState({
                    monthData: this.state.data[month]
                });
            
        } else if (this.state.user === 'Leadership' && this.state.data['Leadership']) {
            for (const key in this.state.data) {
                const dataItem = this.state.data[key];
                console.log('in leadership' + dataItem)
                data[dataItem[month].Company] = dataItem[month];
            }
            this.setState({
                monthData: data
            });
        }
    }

    authOK(userName, _token) {
        console.log(userName)
        this.setState({
            isAuthed: true,
            user: userName,
            token: _token
        });
        this.getData();
    }

    logout() {
        this.setState({
            isAuthed: false,
            loaded: false
        });
    }

    render() {
        let body = <AuthForm
                    userChanged = {(username) => this.usernameChanged(username)}
                    authenticated = {this.authOK.bind(this)}/>

        if (this.state.isAuthed) {
            if (!this.state.loaded) {
                body = < Spinner title = 'Retrieving data, please wait...' />
            } else {
                if (this.state.user === 'Leadership') {
                    body = (<Aux>
                            <Leadership
                                dateChanged = {this.dateChangedHandler.bind(this)}
                                leadData = {this.state.data['Leadership']}
                                monthData = {this.state.monthData}
                                defMonth = {this.setInitialDate()} /> 
                            </Aux>);
                } else {
                    body = <Aux>
                                <Dashboard
                                    dateChanged = {this.dateChangedHandler.bind(this)}
                                    location = {this.state.user}
                                    data = {this.state.data}
                                    monthData = {this.state.monthData}
                                    defMonth = {this.setInitialDate()} /> 
                            </Aux>
                }

            }
        }
        return ( 
            <div className = "App" > 
                {this.state.loaded ? <Navbar logout = {this.logout.bind(this)} />: null } 
                {body} 
            </div>
            );
        }
    }

    export default App;