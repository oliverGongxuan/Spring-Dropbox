import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
// import ListFile from './ListFile';
import * as API from '../api/API';
import ListFolders from './ListFolders';

var divStyle = {
    float:'left',
    width:'20%'
};
class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired
    };

    state = {
        username : '',
        images: [],
        folders:[]

    };

    componentWillMount(){
        this.setState({
            username : this.props.username
        });

        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
        // API.getImages()
        //     .then((data) => {
        //         console.log(data);
        //         this.setState({
        //             images: data
        //         });
        //     });
        API.getFolders()
            .then((data) => {
                console.log(data);
                this.setState({
                    folders: data
                });
            });
    }

    handleLogout= () => {
        API.doLogout()
            .then((status) => {
                if (status === 200) {
                    this.setState({
                        message: "Logout..",
                    });
                     // this.props.history.push("/login");
                    this.props.history.push("/");
                } else if (status === 401) {
                    this.setState({
                        message: "Wrong logout..!!"
                    });
                }
            });
    };
    render(){
        return(
            <div >

                <div className="row justify-content-sm-end">
                    <div className="col-sm-3">
                        <div className="alert alert-warning" role="alert">
                            {this.state.username} welcome to dropbox...!!
                        </div>
                        {/*<Link to="/login">Logout</Link>*/}
                        <button className="btn btn-danger" onClick={() => {
                            // this.props.history.push("/login");
                            this.handleLogout()
                        }}>
                            Logout
                        </button>
                    </div>
                </div>
                <h3 className="row justify-content-sm-center">Dropbox</h3>
                <div style={divStyle}>
                    <div>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.history.push("/folders");
                        }}>
                            Files
                        </button>
                    </div>
                    <div>
                        <br></br>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.history.push("/account");
                        }}>
                            User Account
                        </button>
                    </div>
                    <div>
                        <br></br>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.history.push("/upload");
                        }}>
                            Upload File
                        </button>
                    </div>

                    <div>
                        <br></br>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.history.push("/group");
                        }}>
                            Group
                        </button>
                    </div>
                </div>
                <br/>
                <ListFolders folders={this.state.folders}/>

            </div>
        )
    }
}

export default withRouter(Welcome);