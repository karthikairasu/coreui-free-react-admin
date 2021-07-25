import React, { Component } from 'react'

class EditDevice extends Component {

    state = {
        countries:[],
        units:[]
    }

    addCountry(){
        this.setState({countries: [...this.state.countries, ""], units: [...this.state.units, ""]});
    }

    handleChange(e, index){
        this.state.countries[index] = e.target.value;

        //set the changed state.....
        this.setState({countries: this.state.countries});
    }

    handleRemove(index){
        // remove an item at the index
        this.state.countries.splice(index, 1)

        console.log(this.state.countries, "$$$$");

        // update the state
        this.setState({countries: this.state.countries})
    }

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
                                            <label for="sensor">Sensor<span style={{color: 'red'}}>*</span></label>
                                
                                            <div className="input-group">
                                            <input type="text" aria-label="" id="sensor" className="form-control form-control-sm" placeholder="Parameter"/>
                                            <input type="text" aria-label="" id="unit" className="form-control form-control-sm" placeholder="Unit"/>
                                            <button onClick={(e)=>this.addCountry(e)} class="btn btn-info btn-sm" type="button">+</button>
                                            </div>
                                            {
                                                this.state.countries.map((country, unit, index)=>{
                                                    return( 
                                                        <div key={index}>
                                                    
                                                            <div className="input-group my-1">
                                                            <input onChange={(e)=>this.handleChange(e, index)} value={country} type="text" aria-label="" id="sensor" className="form-control form-control-sm" placeholder="Parameter"/>
                                                            <input value={unit} type="text" aria-label="" id="unit" className="form-control form-control-sm" placeholder="Unit"/>
                                                            
                                                            <button onClick={()=>this.handleRemove(index)} className="btn btn-danger btn-sm">-</button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
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