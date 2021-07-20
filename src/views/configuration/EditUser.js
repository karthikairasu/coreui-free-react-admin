import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div>
                <div className="col-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="">
                                    <h4><strong>Edit User Account</strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-body"> 
                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="from-group mb-2">
                                            <label for="name">Name  <span style={{color: 'red'}}>*</span></label>
                                            <input type="text" className="form-control form-control-sm" id="name" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="email">Email ID  <span style={{color: 'red'}}>*</span></label>
                                            <input type="email" className="form-control form-control-sm" id="email" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="contact">Contact Number  <span style={{color: 'red'}}>*</span></label>
                                            <input type="text" className="form-control form-control-sm" id="contact" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="from-group mb-2">
                                            <label for="pass">Password  <span style={{color: 'red'}}>*</span></label>
                                            <input type="password" className="form-control form-control-sm" id="pass" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="from-group mb-2">
                                            <label for="cpass">Confirm Password  <span style={{color: 'red'}}>*</span></label>
                                            <input type="password" className="form-control form-control-sm" id="cpass" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label>Add Privilleges  <span style={{color: 'red'}}>*</span></label>
                                        </div>
                                        <div className="col-3"></div>
                                        <div className="col-3">
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="typealert" id="typealert" value="critical"/>
                                            <label className="form-check-label" for="typealert">
                                                User
                                            </label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="typealert" id="typealert2" value="major"/>
                                            <label className="form-check-label" for="typealert2">
                                                Admin
                                            </label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="typealert" id="typealert3" value="minor"/>
                                            <label className="form-check-label" for="typealert3">
                                                Super Admin
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-12 text-center py-2">
                                        <button className="btn btn-success rounded-pill" type="button">Register</button>  
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditUser;