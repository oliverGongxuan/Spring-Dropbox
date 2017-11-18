import * as API from '../api/API';
import React, {Component} from 'react';
import ListFolders from './ListFolders';
import ejs from 'ejs';
import { Route, withRouter } from 'react-router-dom';
import Sharing from './Sharing';

var leftDiv = {
    float:'left',
    width:'20%'
};
var centerDiv = {
    float:'right',
    width:'80%'
};
var createFStyle = {
    float:'right',
    width:'20%'
};
class Folder extends Component{
    // state = {
    //     showed: false,
    //     message: '',
    //     username: '',
    //     foldername: '',
    //     folders: []
    // };

    constructor() {
        super();
        this.state = {
            showed: false,
            message: '',
            username: '',
            foldername: '',
            folders: []
        };
    }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
        API.getFolders()
            .then((data) => {
                console.log("folders !!!: "+data);
                this.setState({
                    folders: data
                });
            });
    }
    handleCreateFolderClick = (userdata) => {
        API.creatFolder(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        showed: true,
                        message: "create folder1 folder..!!",
                        username: userdata.username,
                        foldername : userdata.foldername
                    });
                    // this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        create: false,
                        message: "create folder fail!!"
                    });
                }
            });
    };
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        this.handleCreateFolderClick(this.state);
    }
    render() {
        return (
            <div >
                <div className="row justify-content-sm-end">
                    <button className="btn btn-primary" onClick={() => {
                        this.props.history.push("/welcome");
                    }}>
                        Return
                    </button>
                </div>
                <br></br>
                <h1>Dropbox</h1>
                <br></br>

                <form className={"row justify-content-sm-end"} onSubmit={this.onSubmit}>
                    <input type="text" name="fodlername" value={this.state.foldername}
                           onChange={(event) => {
                              this.setState({
                                   foldername : event.target.value
                        });
                    }} />
                    <button className="btn btn-primary" type="submit">New folder</button>
                </form>
                <br/>
                <button style={leftDiv} className="btn btn-primary" onClick={() => {
                    this.props.history.push("/sharing");
                }}>
                    Sharing
                </button>
                <br/>


                <Route exact path="/folders" render={() => (
                    <div style={centerDiv}>

                        <h3>My files</h3>
                        <br></br>
                        <ListFolders folders={this.state.folders}/>
                    </div>

                )}/>

            </div>

        );
    }
}
export default withRouter(Folder);