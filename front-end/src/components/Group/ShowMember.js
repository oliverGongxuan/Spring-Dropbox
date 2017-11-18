import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  withRouter } from 'react-router-dom';
import * as API from '../../api/API';
import Message from "../Message";
const divStyle = {

    // backgroundImage: 'url(' + imgUrl + ')',
};
const ratingChanged = (newRating) => {
    console.log(newRating)
}

class ShowMember extends Component {
    // handleShowMemberSubmit = (userdata) => {
    //     API.getMembers(userdata)
    //         .then((status) => {
    //             if (status === 201) {
    //                 this.setState({
    //                     showed: true,
    //                     message: "show member sucess..!!",
    //                     groupid: userdata.groupid
    //                 });
    //                 this.props.history.push("/showMember");
    //             } else if (status === 401) {
    //                 this.setState({
    //                     showed: false,
    //                     message: "show member fail..!!"
    //                 });
    //             }
    //         });
    // };

    state = {
        groupid: '',
        showed: '',
        message:'',
        members:[]
    };

    componentWillMount(){
        this.setState({
            groupid: '',
            showed: '',
            message:'',
            members:[]
        });
    }
    static propTypes = {
        members: PropTypes.array.isRequired
    };

    render(){
        // const folders = this.props.folders;
        // console.log("folders:"+folders);
        return (
            <div>
                <div className="row justify-content-sm-end">
                    <button className="btn btn-primary" onClick={() => {
                        this.props.history.push("/group");
                    }}>
                        Return
                    </button>
                </div>

                {this.props.members.map(member=>{
                    return <div style={divStyle} key={member.member}>
                        213312
                        {member.member}
                    </div>
                })}
            </div>
        );
    }
}


export default withRouter(ShowMember);