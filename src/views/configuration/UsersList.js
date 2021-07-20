import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaPlus, FaPencilAlt } from "react-icons/fa";

class UsersList extends Component {
    render() {
        return (
            <div>
                <div className="col-12 text-right mb-3">
                    <Link className="btn btn-success" to="/configuration/AddUsers" ><FaPlus name="add"/> Add User</Link>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5><strong>Users List</strong></h5>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr className="table-primary">
                                <th>#</th>
                                <th>Name</th> 
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>user</td>
                                <td><span className="badge badge-success">active</span></td>
                                <td><Link to="/configuration/EditUser"><FaPencilAlt /></Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Admin</td>
                                <td>Admin</td>
                                <td><span className="badge badge-success">active</span></td>
                                <td><Link to="/configuration/EditUser"><FaPencilAlt /></Link></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Super Admin</td>
                                <td>Super Admin</td>
                                <td><span className="badge badge-success">active</span></td>
                                <td><Link to="/configuration/EditUser"><FaPencilAlt /></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UsersList;