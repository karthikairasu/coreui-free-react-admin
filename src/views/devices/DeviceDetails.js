import React, { Component } from 'react';
import { FaPlus, FaSearch, FaPencilAlt, FaTemperatureHigh } from "react-icons/fa";

class DeviceDetails extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h5><strong>Device Details</strong></h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <FaTemperatureHigh></FaTemperatureHigh>
                            </div>
                            <div className="col-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default DeviceDetails;