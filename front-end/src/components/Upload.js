// import Dropzone from 'react-dropzone';
// import React, {Component} from 'react';
import {withRouter } from 'react-router-dom';
// import * folder2 API from '../api/API';
// var request = require('superagent');
// var apiBaseUrl = "http://localhost:3000/api/";
import React, {Component} from 'react';
import * as API from '../api/API';
// import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
// import Typography from 'material-ui/Typography';

class Upload extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }
    handleFileUpload = (event) => {

        const payload = new FormData();

        payload.append('name', event.target.files[0]);

        API.fileupload(payload)
            .then((status) => {
                if (status === 201) {
                    API.getImages()
                        .then((data) => {
                            this.setState({
                                images: data
                            });
                        });
                }
            });

    };

    componentDidMount() {
        API.getImages()
            .then((data) => {
                console.log(data);
                this.setState({
                    images: data
                });
            });
    };

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
                <h1>Dropbox</h1>

                <br></br>
                <TextField
                    className={'fileupload'}
                    type="file"
                    name="name"
                    onChange={this.handleFileUpload}
                />


            </div>

        );
    }
}

export default withRouter(Upload);