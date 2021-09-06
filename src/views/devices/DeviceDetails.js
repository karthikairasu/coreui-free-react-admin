import React, { Component } from 'react';
import { FaPlus, FaSearch, FaPencilAlt, FaTemperatureHigh } from "react-icons/fa";
import Device  from '../../assets/device.png';

import FusionChartss from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFCC from 'react-fusioncharts';
import FusionThemee from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {
  CChartLine
} from '@coreui/react-chartjs';

ReactFCC.fcRoot(FusionChartss, Widgets, FusionThemee);

  const chartConfigss = {
    type: 'angulargauge',
    width: "100%",
    height: "100%",
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "",
            lowerlimit: "-50",
            upperlimit: "50",
            showvalue: "1",
            numbersuffix: "°C",
            theme: "fusion",
            showtooltip: "0"
          },
          colorrange: {
            color: [
              {
                minvalue: "-50",
                maxvalue: "-20",
                code: "#1F72D6"
              },
              {
                minvalue: "-20",
                maxvalue: "0",
                code: "#9FC7F6"
              },
              {
                minvalue: "0",
                maxvalue: "30",
                code: "#63C403"
              },
              {
                minvalue: "30",
                maxvalue: "40",
                code: "#FFC533"
              },
              {
                minvalue: "40",
                maxvalue: "50",
                code: "#F71F0F"
              }
            ]
          },
          dials: {
            dial: [
              {
                value: "41"
              }
            ]
          }
     },
  };
  
class DeviceDetails extends Component {
    render() {
        return (
            <div>
              <div className="mx-2" style={{background:"#fff"}}>
                  <h5 className="p-2"><strong>Device Details</strong></h5>
              </div>
              <div className="container-fluid my-2">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center" style={{height:'275px'}}>
                            <div>
                              <h6 className="text-info text-center py-2"><strong>Device # 10002</strong></h6>
                              <img id="device_img" alt="Device" src={Device} style={{height:"13vw", width : "auto"}}/>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <div>
                              <p><strong>Brand and Model :</strong> Ansara</p>
                              <p><strong>Warehouse :</strong> Riyadh</p>
                              <p><strong>Chamber :</strong> Chamber 1</p>
                              <p><strong>Sensor :</strong> Temperture, Humidity, Battery</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                         
                      <div className="row">
                      <div className="col-12" style={{height:'220px'}}>
                        <ReactFCC id="gauge" {...chartConfigss} /> 
                        </div>
                        <div className="col-12">
                          <div className="row">
                          <div className="col-4 px-0">
                          <div className="tem text-center">
                            <p className="mb-0"><i className="fas fa-thermometer-half"></i> <strong>TEMP</strong></p>
                            <h5><strong><span id="temVal">41.00</span>°C</strong></h5>
                            </div>
                          </div>
                          <div className="col-4 px-0">
                            <div className="hum text-center">
                                <p className="mb-0"><i className="fas fa-tint"></i> <strong>HUMID</strong></p>
                                <h5><strong><span id="humVal">53.39</span>% RH</strong></h5>
                            </div>
                          </div>
                          <div className="col-4 px-0">
                            <div className="bat text-center">
                                <p className="mb-0"><i className="fas fa-car-battery"></i> <strong>Battery</strong></p>
                                <h5><strong>30%</strong></h5>
                            </div>
                          </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-12 col-md-6 d-flex align-items-center" style={{background:"#fff"}}>
                    <div className="row">
                        <div className="col-6 text-center py-2">
                            <h6 className="text-info"><strong>Device # 10002</strong></h6>
                            <img src={Device} style={{height:"12vw", width : "auto"}}/>
                        </div>
                        <div className="col-6 py-2">
                            <p><strong>Brand and Model :</strong> Ansara</p>
                            <p><strong>Warehouse :</strong> Riyadh</p>
                            <p><strong>Chamber :</strong> Chamber 1</p>
                            <p><strong>Sensor :</strong> Temperture, Humidity, Battery</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6" style={{background:"#fff"}}>
                    <ReactFCC id="gauge" {...chartConfigss} />
                  </div>
                </div> */}
              </div>
              <div className="col-6">
                <div className="card">
                  <div className="row">
                    <div className="col-12 col-md-12">
                    <div className="card border-0">
                      <div className="card-header">
                        Line Chart
                      </div>
                      <div className="card-body">
                        <CChartLine
                          datasets={[
                            {
                              label: 'Temperature',
                              backgroundColor: 'rgb(228,102,81,0.9)',
                              data: [30, 39, 10, 50, 30, 40, 35]
                            },
                            {
                              label: 'Humidity',
                              backgroundColor: 'rgb(0,216,255,0.9)',
                              data: [39, 45, 40, 35, 40, 20, 45]
                            }
                          ]}
                          options={{
                            tooltips: {
                              enabled: true
                            }
                          }}
                          labels={[
                            '12.00', '12.30', '1.00', '1.30',
                            '2.00', '2.30', '3.00'
                          ]}
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}


export default DeviceDetails;