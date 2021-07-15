import React, { Component } from 'react';
import CIcon from '@coreui/icons-react';

class Help extends Component {
    render() {
        return (
            <div>
                <div className="col-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="">
                                    <h5><strong>Help Line</strong></h5>
                                </div>
                                <div className="">
                                    <div><CIcon name="cil-phone"/> -<span>8000000000000</span></div>
                                    <div><CIcon name="cil-envelope-closed" height=""/> -<span>help@ansara.co.in</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="col-10 mx-auto">
                                <form>
                                    <div className="from-group mb-2">
                                        <label for="name">Name  <span style={{color: 'red'}}>*</span></label>
                                        <input className="form-control form-control-sm" id="name" />
                                    </div>
                                    <div className="from-group mb-2">
                                        <label for="mobile">Mobile No  <span style={{color: 'red'}}>*</span></label>
                                        <input className="form-control form-control-sm" id="mobile" />
                                    </div>
                                    <div className="from-group mb-2">
                                        <label for="email">Email  <span style={{color: 'red'}}>*</span></label>
                                        <input className="form-control form-control-sm" id="email" />
                                    </div>
                                    <div className="from-group mb-2">
                                        <label for="subject">Subject  <span style={{color: 'red'}}>*</span></label>
                                        <input className="form-control form-control-sm" id="subject" />
                                    </div>
                                    <div className="from-group mb-2">
                                        <label for="msg">Message  <span style={{color: 'red'}}>*</span></label>
                                        <textarea className="form-control form-control-sm" id="msg" ></textarea>
                                    </div>
                                    <div className="from-group text-center py-2">
                                        <button className="btn btn-success rounded-pill" type="button">Send Mail</button>  
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Help;