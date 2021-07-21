import React, { Component } from 'react'

class EditAlert extends Component {
    render() {
        return (
            <div>
                <div className="col-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="">
                                    <h4><strong>Edit Alert Configuration</strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-body"> 
                            <form>
                                <div className="row">
                                <div className="col-3">
                                        <div className="from-group mb-2">
                                            <label for="warehouse">Warehouse  <span style={{color: 'red'}}>*</span></label>
                                            <select className="form-control form-control-sm" id="warehouse">
                                                <option value="">Choose warehouse</option>
                                                <option value="">Riyadh</option>
                                                <option value="">Dammam</option>
                                                <option value="">Jeddah</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="from-group mb-2">
                                            <label for="chamber">Chamber  <span style={{color: 'red'}}>*</span></label>
                                            <select className="form-control form-control-sm" id="chamber">
                                                <option value="">Choose Chamber</option>
                                                <option value="">Chamber 1</option>
                                                <option value="">Chamber 2</option>
                                                <option value="">Chamber 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="from-group mb-2">
                                            <label for="chamber">CNC Power Meter  <span style={{color: 'red'}}>*</span></label>
                                            <select className="form-control form-control-sm" id="chamber">
                                                <option value="">Choose</option>
                                                <option value="">Power Meter</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="from-group mb-2">
                                            <label for="chamber">Power Factor  <span style={{color: 'red'}}>*</span></label>
                                            <select className="form-control form-control-sm" id="chamber">
                                                <option value="">Choose</option>
                                                <option value="">Power Factor</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label>Type of Alert  <span style={{color: 'red'}}>*</span></label>
                                            </div>
                                            <div className="col-3"></div>
                                            <div className="col-3">
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="typealert" id="typealert" value="critical"/>
                                                <label className="form-check-label" for="typealert">
                                                    Critical
                                                </label>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="typealert" id="typealert2" value="major"/>
                                                <label className="form-check-label" for="typealert2">
                                                    Major
                                                </label>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="typealert" id="typealert3" value="minor"/>
                                                <label className="form-check-label" for="typealert3">
                                                    Minor
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="from-group mb-2">
                                            <label for="dname">Min Value  <span style={{color: 'red'}}>*</span></label>
                                            <input type="number" className="form-control form-control-sm" id="dname" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="did">Max Value  <span style={{color: 'red'}}>*</span></label>
                                            <input type="number" className="form-control form-control-sm" id="did" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="monit">Monitoring Interval / secs  <span style={{color: 'red'}}>*</span></label>
                                            <input type="number" className="form-control form-control-sm" id="monit" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="from-group mb-2">
                                            <label for="minw">Min Warning  <span style={{color: 'red'}}>*</span></label>
                                            <input type="number" className="form-control form-control-sm" id="minw" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="maxw">Max Warning  <span style={{color: 'red'}}>*</span></label>
                                            <input type="number" className="form-control form-control-sm" id="maxw" />
                                        </div>
                                        <div className="from-group mb-2">
                                            <label for="email">Email Id  <span style={{color: 'red'}}>*</span></label>
                                            <input type="email" className="form-control form-control-sm" id="email" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div className="from-group mb-2">
                                            <label for="alertsub">Alert Subject  <span style={{color: 'red'}}>*</span></label>
                                            <textarea type="text" className="form-control form-control-sm" id="alertsub" />
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

export default EditAlert;
