import React, { Component } from 'react'

class AddDevices extends Component {
    render() {
        return (
            <div>
                <div className="col-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="">
                                    <h4><strong>Add Devices</strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-body"> 
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="from-group mb-2">
                                            <label for="dname">Device Name  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="dname" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="did">Device Id  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="did" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="warehouse">Warehouse  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="warehouse" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="chamber">Chamber  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="chamber" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="from-group mb-2">
                                            <label for="bname">Brand and Model Name  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="bname" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="sensor">Sensor Type  <span style={{color: 'red'}}>*</span></label>
                                            <input className="form-control form-control-sm" id="sensor" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="sensor">Sensor<span style={{color: 'red'}}>*</span></label>
                                            <div className="input-group">
                                            <input type="text" aria-label="" id="sensor" className="form-control form-control-sm" placeholder="Sensor"/>
                                            <input type="text" aria-label="" id="unit" className="form-control form-control-sm" placeholder="Unit"/>
                                            <button class="btn btn-info btn-sm" type="button">Add</button>
                                            </div>
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

export default AddDevices;