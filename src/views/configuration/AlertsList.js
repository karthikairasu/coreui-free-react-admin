import React, { Component } from 'react';
import CIcon from '@coreui/icons-react';
import { FaPlus, FaSearch, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

class AlertsList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-7 mb-3"></div>
                    <div className="col-3 mb-3">
                        <input className="form-control position-relative" placeholder="Search" style={{paddingRight:'26px'}}/>
                        <FaSearch size="15" style={{position: 'absolute', top: '12px', right: '25px'}}/>
                    </div>
                    <div className="col-2 mb-3">
                        <Link className="btn btn-success" to="/configuration/AddAlerts" ><FaPlus name="add"/> Add Alert</Link>
                    </div>
                </div>
                <div className="card">
                    <table class="table table-bordered">
                        <thead>
                            <tr className="table-primary">
                                <th rowSpan="2">Parameter & Description</th>
                                <th rowSpan="2">Type</th> 
                                <th colSpan="2">Values</th>
                                <th colSpan="2">Warning</th>
                                <th rowSpan="2">Interval</th>
                                <th rowSpan="2">Action</th>
                            </tr>
                            <tr className="table-danger">
                                <th>Min</th>
                                <th>Max</th>
                                <th>Min</th>
                                <th>Max</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Temperature</td>
                                <td>Minor</td>
                                <td>38</td>
                                <td>43</td>
                                <td>38</td>
                                <td>43</td>
                                <td>5</td>
                                <td><Link to="/configuration/EditAlert"><FaPencilAlt /></Link></td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>Minor</td>
                                <td>38</td>
                                <td>43</td>
                                <td>38</td>
                                <td>43</td>
                                <td>5</td>
                                <td><Link to="/configuration/EditAlert"><FaPencilAlt /></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AlertsList;
