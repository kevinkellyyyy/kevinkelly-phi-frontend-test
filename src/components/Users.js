import React, { Component } from 'react';

export default class Users extends Component{
    handleUpdate = () => {
        this.props.updateUser(this.idxNum, this.uname.value, this.uaddress.value, this.uphone.value);
    }

    render() {
        const {allUsers, pressEditBtn, pressCancelBtn, pressDelete} = this.props;
        const usersList = allUsers.map((user, idx) => {
            return user.isEditing === true ? (
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td><input className="inpField form-control" type="text" ref={(val) => {this.uname = val}} required defaultValue={user.name}/></td>
                    <td><input className="inpField form-control" type="text" ref={(val) => {this.uaddress = val}} required defaultValue={user.address}/></td>
                    <td><input className="inpField form-control" type="number" ref={(val) => {this.uphone = val}} required defaultValue={user.phone}/></td>
                    <td><button className="btn btnUp" onClick={this.handleUpdate} ref={() => {this.idxNum = idx}}>Update <i className="fa fa-check-square-o" aria-hidden="true"></i></button> | <button className="btn btnCnl btn-secondary" onClick={() => pressCancelBtn(idx)}>Cancel <i className="fa fa-ban" aria-hidden="true"></i></button></td>
                    
                </tr> 
            ) : (
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>
                        <td><button className="btn btnEdit" onClick={() => pressEditBtn(idx)}>Edit <i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>  |  <button className="btn btnDel" onClick={()=>pressDelete(idx)}>Delete <i className="fa fa-trash-o" aria-hidden="true"></i></button></td>
                    </tr>
            )
        })
        return(
            <table className="table table-dark table-striped table-hover table-sm ta">
                <thead className="thead-light">
                    <tr>
                        <th>#No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=".table-striped">
                    {allUsers.length > 0 ? usersList : <tr className="noData"><td colSpan="5"><h2>No Employee data, please add below</h2></td></tr>}
                </tbody>
            </table>
        )
    }
}