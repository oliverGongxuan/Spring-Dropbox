import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
const divStyle = {

    // backgroundImage: 'url(' + imgUrl + ')',
};
const ratingChanged = (newRating) => {
    console.log(newRating)
}

class ListFolders extends Component {
    static propTypes = {
        folders: PropTypes.array.isRequired
    };

    render(){
        // const folders = this.props.folders;
        // console.log("folders:"+folders);
        return (
            <Table>
                {/*<div>*/}
                {/*{this.props.folders.map(folder=>{*/}
                {/*return <div style={divStyle} key={folder.folder}>*/}
                {/*{folder.folder}*/}
                {/*<ReactStars className="row justify-content-sm-center" onChange={ratingChanged} size={24} color2={'#ff9218'} />*/}
                {/*</div>*/}
                {/*})}*/}
                {/*</div>*/}
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.folders.map((folder) => {
                        return (
                            <TableRow key={folder.name}>
                                <TableRowColumn>{folder.name}</TableRowColumn>
                                <ReactStars className="row justify-content-sm-center" onChange={ratingChanged} size={24} color2={'#ff9218'} />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}


export default ListFolders;