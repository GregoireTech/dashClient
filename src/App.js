
import React, {Component} from 'react';
import './App.css';

import axios from './assets/instances';
import AuthForm from './pages/authForm/authForm';
import Leadership from './pages/Leadership/Leadership';
import Dashboard from './pages/Dashboard/Dashboard';
import Spinner from './components/Spinner/spinner';
import Navbar from './components/navbar/navbar';
import Aux from './hoc/Auxiliary';

class App extends Component {
    state = {
        isAuthed: false,
        user: null,
        loaded: false,
        data: null,
        monthData: null
    };

    componentDidMount() {
        const nav = document.getElementById('nav');
        if (nav) {
            setTimeout(function () {
                nav
                    .classList
                    .add('hidden');
            }, 1500);
            (function mouseListener() {
                window.addEventListener('mousemove', () => {
                    nav
                        .classList
                        .remove('hidden');
                    setTimeout(function () {
                        nav
                            .classList
                            .add('hidden');
                    }, 1500);
                });
            })();
        };


    }

    setInitialDate() {
        let date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth();
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        month = monthNames[month - 1];
        date = month + ' ' + JSON.stringify(year);
        return date;
    }

    usernameChanged(username) {
        this.setState({user: username})
    }

    dateChangedHandler(event) {
        this.setMonthData(event.target.value);
    }

    getData() {
        axios(this.state.user)
            .get()
            .then(response => {
                this.setState({data: response.data});
                this.setMonthData(this.setInitialDate());
                this.setState({loaded: true});
            })
            .catch(error => {
                alert(error.message);
                this.setState({loaded: true});
            });
    }

    setMonthData(month) {
        if (this.state.user !== 'Leadership') {
            for (let i = 0; i < this.state.data.length; i++) {
                if (this.state.data[i].Month === month) {
                    this.setState({monthData: this.state.data[i]});
                }
            }
        } else {
            let data = [];
            for (var i = 0; i < this.state.data.length; i++) {
                let name = this.state.data[i].name;
                let locData = this.state.data[i].data;

                for (var ii = 0; ii < locData.length; ii++) {
                    if (locData[ii].Month === month) {
                        data.push({name: name, data: locData[ii]})
                    }
                }
            }
            this.setState({monthData: data});
        }
    }

    authOK() {
        this.setState({isAuthed: true});
        this.getData();
    }

    logout() {
        this.setState({isAuthed: false, loaded: false});
    }

    render() {

        const navbar = <Navbar logout={this
            .logout
            .bind(this)}/>;

        let body = <AuthForm
            userChanged={(username) => this.usernameChanged(username)}
            authenticated={this
            .authOK
            .bind(this)}/>

        if (this.state.isAuthed) {
            if (!this.state.loaded) {
                body = <Spinner title='Retrieving data, please wait...'/>
            } else {
                if (this.state.user === 'Leadership') {
                    body = <Aux>
                        
                        <Leadership
                            dateChanged={this
                            .dateChangedHandler
                            .bind(this)}
                            leadData={this.state.data[0]}
                            monthData={this.state.monthData}
                            defMonth={this.setInitialDate()}/>
                    </Aux>
                } else {
                    body = <Aux>
                        
                        <Dashboard
                            dateChanged={this
                            .dateChangedHandler
                            .bind(this)}
                            location={this.state.user}
                            data={this.state.data}
                            monthData={this.state.monthData}
                            defMonth={this.setInitialDate()}/>
                    </Aux>
                }

            }
        }
        return (
            <div className="App">
                {/* this.state.loaded? {navbar}: null */}
                {body}
            </div>
        );
    }
}

export default App;
