import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';

class Signup extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        firstname: '',
        name: '',
        email: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            firstname: '',
            name: '',
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Signup</h1>
                        </div>

                        <div className="form-group">
                            <TextField
                                className="form-control"
                                type="text"
                                label="First name"
                                placeholder="Enter first name"
                                value={this.state.firstname}
                                onChange={(event) => {
                                    this.setState({
                                        firstname: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <TextField
                                className="form-control"
                                type="text"
                                label="Lastname"
                                placeholder="Enter username"
                                value={this.state.name}
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <TextField
                                className="form-control"
                                type="email"
                                label="Email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <TextField
                                className="form-control"
                                type="text"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                Submit
                            </button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row justify-content-sm-center">
                            <button className="btn btn-success" onClick={() => {
                                this.props.history.push("/");
                            }}>
                                Return
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);