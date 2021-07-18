import React, { Component } from 'react';
import CIcon from '@coreui/icons-react';
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

class DevicesList extends Component {
    render() {
        return (
            <div>
                <div className="col-12 text-right">
                    <Link className="btn btn-success" to="/configuration/AddDevices" ><FaPlus name="add"/> Add Device</Link>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card px-2 py-2" style={{}}>
                        <div className="card-header px-1 d-flex justify-content-between">
                            <div>
                                <strong>Device # 10002</strong>
                                <div className="text-dark">
                                    <small>Temperature</small>
                                </div>
                            </div>
                            <div>
                                <Link to="/configuration/EditDevice"><CIcon name="cil-pencil"></CIcon></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 text-left mb-3">
                                    <div className="text-dark">Brand and Model</div>
                                    <div><strong>Ansara</strong></div>
                                </div>
                                <div className="col-6 text-left">
                                    <div className="text-dark">Warehouse</div>
                                    <div><strong>Riyadh</strong></div>
                                </div>
                                <div className="col-6 text-left">
                                    <div className="text-dark">Chamber</div>
                                    <div><strong>Chamber 1</strong></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer px-2 py-1">
                        <div className="text-secondary">
                            Reg.Date: 13 Jun 2021 07:58 PM
                        </div>
                        </div>
                    </div>     
                </div>
            </div>
        )
    }
}

export default DevicesList;