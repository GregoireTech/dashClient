import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './authForm.css';
import Input from '../../components/Input/Input';
import axios from '../../assets/login';
import Spinner from '../../components/authSpinner/spinner';

class authForm extends Component {

    state = {
        userId: null,
        password: null,
        auth: false,
        clicked: false
    };

    userIdInputChanged(event) {
        this.setState({
            ...this.state,
            userId: event.target.value
        });
        this
            .props
            .userChanged(event.target.value)
    };
    passwordInputChanged(event) {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    };

    authFailHandler(spinner) {
        spinner.classList.add('noShow');
        const unvalid = document.getElementById('unvalid');
        unvalid.classList.remove('noShow');
        unvalid.classList.remove("shake");
        setTimeout(function () {
            document.getElementById('unvalid').classList.add("shake");
        }, 25);
    }

    authenticate() {
        const spinner = document.getElementById('authSpinner');
        spinner.classList.remove('noShow');
        axios(this.state.userId, this.state.password)
            .get()
            .then(response => {
                console.log(response)
                if (response.data.authStatus) {
                    this.props.authenticated(this.state.user, response.data.token);
                } else {
                    this.authFailHandler(spinner);
                }
            })
            .catch(error => {
                spinner.classList.add('noShow');
                alert('There was an error.. Please try again! \n Error message: ' + error.message)
            });
    };

    render() {
        (function () {
            var shouldHandleKeyDown = true;
            document.onkeydown = function (e) {
                if (!shouldHandleKeyDown) return;
                if (e.keyCode === 13){
                    let button = document.getElementById('loginBtn');
                    if (button) {
                        button.classList.add('activated');
                        setTimeout(function () { button.classList.remove("activated")}, 200);
                        button.click();             
                    }              
                    shouldHandleKeyDown = false;
                }
            }
            document.onkeyup = function () {
                shouldHandleKeyDown = true;
            }
        })();

        return (
            <Aux>
                <section id='authForm'>

                    <Spinner/>
                    <div className='form'>
                        <h2 className='section-title'>Please login</h2>
                        <form>
                            <div className="form-group">
                                <Input
                                    inputType="input"
                                    name="Username"
                                    changed={this
                                    .userIdInputChanged
                                    .bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={this
                                    .passwordInputChanged
                                    .bind(this)}/>
                            </div>
                        </form>
                        <p id='unvalid' className='unvalid noShow'>Incorrect username/password combination</p>

                        <button
                            id='loginBtn'
                            className="send-btn"
                            onClick={this
                            .authenticate
                            .bind(this)}>Login</button>
                    </div>
                </section>
            </Aux>
        );
    }
}

export default authForm;