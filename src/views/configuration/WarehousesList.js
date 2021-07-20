import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaPlus, FaPencilAlt } from "react-icons/fa";

class WarehousesList extends Component {
    render() {
        return (
            <div>
                <div className="col-12 text-right mb-3">
                    <Link className="btn btn-success" to="/configuration/AddWarehouse" ><FaPlus name="add"/> Add Warehouse</Link>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5><strong>Warehouse's List</strong></h5>
                    </div>
                    <table class="table table-bordered">
                        <thead>
                            <tr className="table-primary">
                                <th>Name</th>
                                <th>City</th> 
                                <th>Phone</th>
                                <th>Manager Phone</th>
                                <th>Email</th>
                                <th>Land Area</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Warehouse 1</td>
                                <td>Riyadh</td>
                                <td>+91234567985</td>
                                <td>+91324567987</td>
                                <td>xyz@gmail.com</td>
                                <td>Riyadh</td>
                                <td><span className="badge badge-success">active</span></td>
                                <td><Link to="/configuration/EditWarehouse"><FaPencilAlt /></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default WarehousesList;