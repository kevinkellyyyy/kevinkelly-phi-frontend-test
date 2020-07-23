import React,{ Component } from 'react';

export default class AddUser extends Component{
    state = {
        name: null,
        address: null,
        phone: null,
        isEditing: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        e.target.reset();
    }

    updateState = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return(
            <div className="card">
                <div className="card-header">
                    <h2>Add New Employee Data</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="formRes form-row">
                            <div className="col">
                                <input className="inpField form-control" type="text" name="name" autoComplete="off" placeholder="Enter Name" onChange={ this.updateState}  required />
                            </div>
                            <div className="col">
                                <input className="inpField form-control" type="text" name="address" autoComplete="off" placeholder="Enter Address" onChange={ this.updateState }  required />
                            </div>
                            <div className="col">
                                <input className="inpField form-control" type="number" name="phone" autoComplete="off" placeholder="Enter Phone Number" onChange={ this.updateState }  required />
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btnAdd">Add New <i className="fa fa-plus-square-o" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}