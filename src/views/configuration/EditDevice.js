import React, { Component } from 'react'

class EditDevice extends Component {
    render() {
        return (
            <div>
                <div className="col-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="">
                                    <h4><strong>Edit Device</strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-body"> 
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="from-group mb-2">
                                            <label for="dname">Device Name  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="dname" value="Device" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="did">Device Id  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="did" value="10002" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="warehouse">Warehouse  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="warehouse" value="Riyadh" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="chamber">Chamber  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="chamber" value="chamber 1" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="from-group mb-2">
                                            <label for="bname">Brand and Model Name  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="bname" value="ansara" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="sensor">Sensor Type  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="sensor" value="Temperature" />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center py-2">
                                        <button className="btn btn-success rounded-pill" type="button">Submit</button>  
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

export default EditDevice;