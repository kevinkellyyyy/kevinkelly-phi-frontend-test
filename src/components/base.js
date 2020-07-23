import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

export default class Base extends Component{
    state = {
        users: [
            {name:"Tono", address: "Jalan kuburan no 12", phone: "0000000000", isEditing:false},
            {name:"Toni", address: "Jalan kuburan no 11", phone: "0000000001", isEditing:false},
            {name:"Aku Siapa", address: "rumahku dimana", phone: "0888899929", isEditing:false},
        ]
    }

    addUser = (newUser) => {
        let users = [...this.state.users, newUser];
        this.setState({
            users
        });
    }

    pressEditBtn = (i) => {
        let users = this.state.users;
        for(let q in users){
            users[q].isEditing = false
        }
        users[i].isEditing = !users[i].isEditing;
        this.setState({
            users
        });
    }

    pressCancelBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = !users[i].isEditing;
        this.setState({
            users
        });
    }

    updateUser = (i, uname, uaddress, uphone) => {
        let users = this.state.users;
        users[i].name = uname;
        users[i].address = uaddress;
        users[i].phone = uphone;
        users[i].isEditing = false;
        this.setState({
            users
        });
    }

    pressDelete = (i) => {
        let users = this.state.users.filter((u, index) => {
            return index !== i;
        });
        this.setState({
            users
        });
    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="title">ReactJS Local CRUD</h1>
                </div>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} pressCancelBtn={this.pressCancelBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
                <p className="foot">Copyright © 2020 | Kevin Kelly Isyanta </p>
            </div>
        )
    }
}