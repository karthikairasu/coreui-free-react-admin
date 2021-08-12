import React, { Component } from 'react';
import { FaPlus, FaSearch, FaPencilAlt, FaTemperatureHigh } from "react-icons/fa";
import Device  from '../../assets/device.png';

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import FusionChartss from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFCC from 'react-fusioncharts';
import FusionThemee from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFCC.fcRoot(FusionChartss, Widgets, FusionThemee);

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ];
  
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Temperature",
        //Set the chart subcaption
        subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "Country",
        //Set the y-axis name
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data: chartData
    }
  };

  const chartConfigss = {
    type: 'angulargauge',
    width: "100%",
    height: "100%",
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Chamber",
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
                    <div className="card h-100">
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <div className="row">
                          <div className="col-12 col-md-6 text-center">
                              <h6 className="text-info"><strong>Device # 10002</strong></h6>
                              <img src={Device} style={{height:"12vw", width : "auto"}}/>
                          </div>
                          <div className="col-12 col-md-6">
                              <p><strong>Brand and Model :</strong> Ansara</p>
                              <p><strong>Warehouse :</strong> Riyadh</p>
                              <p><strong>Chamber :</strong> Chamber 1</p>
                              <p><strong>Sensor :</strong> Temperture, Humidity, Battery</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="card h-100">
                      <div className="card-body">
                        <ReactFCC id="gauge" {...chartConfigss} />  
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
                <div className="card">
                  <div className="row">
                    <div className="col-12 col-md-12">
                    <ReactFC id="linechart" {...chartConfigs} />
                    </div>
                  </div>
                </div>
                <div className="card">
                    
                </div>
            </div>
        )
    }
}


export default DeviceDetails;