import React, {Component} from 'react';
import * as API from '../../api/API';
import { withRouter } from 'react-router-dom';

class DeleteGroup extends Component {

    handleDeleteGroupSubmit = (userdata) => {
        API.deleteGroup(userdata)
            .then((status) => {
                if (status === 200) {
                    this.setState({
                        showed: true,
                        message: "delete group sucess..!!",
                        groupid: userdata.groupid
                    });
                    this.props.history.push("/deleteGroup");
                } else if (status === 401) {
                    this.setState({
                        showed: false,
                        message: "delete group fail..!!"
                    });
                }
            });
    };

    state = {
        groupid: '',
        showed: ''
    };

    componentWillMount(){
        this.setState({
            groupid: '',
            showed: ''
        });
    }

    render() {
        return (
            <div>
                <div className="row justify-content-sm-end">
                    <button className="btn btn-primary" onClick={() => {
                        this.props.history.push("/group");
                    }}>
                        Return
                    </button>
                </div>
                <div className="row justify-content-md-center">
                    <form>
                        <br/>
                        <div className="form-group">
                            <h3>Delete Group</h3>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                id="groupName"
                                label="groupName"
                                placeholder="Enter Group Name"
                                value={this.state.groupid}
                                onChange={(event) => {
                                    this.setState({
                                        groupid: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.handleDeleteGroupSubmit(this.state)}>
                                Delete Group
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(DeleteGroup);