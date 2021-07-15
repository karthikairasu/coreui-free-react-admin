import React, { Component } from 'react';
import CIcon from '@coreui/icons-react';

class DevicesList extends Component {
    render() {
        return (
            <div>
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
                                <CIcon name="cil-pencil"></CIcon>
                            </div>
                        </div>
                        <div className="card-body d-flex jus">
                            <div className="col-6 text-center">
                                <div className="text-dark">Temperature</div>
                                <div><strong>40</strong></div>
                                <div>cel</div>
                            </div>
                        </div>
                        <div className="card-footer border-0 px-2 py-1">
                        <div className="text-secondary">
                            last update @ 07/13/2021 07:58PM
                        </div>
                        </div>
                    </div>     
                </div>
            </div>
        )
    }
}

export default DevicesList;