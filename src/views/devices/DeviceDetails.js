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
        caption: "Countries With Most Oil Reserves [2017-18]",
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
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Nordstorm's Customer Satisfaction Score for 2017",
            lowerlimit: "0",
            upperlimit: "100",
            showvalue: "1",
            numbersuffix: "%",
            theme: "fusion",
            showtooltip: "0"
          },
          colorrange: {
            color: [
              {
                minvalue: "0",
                maxvalue: "50",
                code: "#F2726F"
              },
              {
                minvalue: "50",
                maxvalue: "75",
                code: "#FFC533"
              },
              {
                minvalue: "75",
                maxvalue: "100",
                code: "#62B58F"
              }
            ]
          },
          dials: {
            dial: [
              {
                value: "81"
              }
            ]
          }
     },
  };
  
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
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <h6 className="text-info"><strong>Device # 10002</strong></h6>
                                        <img src={Device} style={{height:"15vw", width : "auto"}}/>
                                    </div>
                                    <div className="col-6">
                                        <p><strong>Brand and Model :</strong> Ansara</p>
                                        <p><strong>Warehouse :</strong> Riyadh</p>
                                        <p><strong>Chamber :</strong> Chamber 1</p>
                                        <p><strong>Sensor :</strong> Temperture, Humidity, Battery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="col-12 col-md-12">
                    <ReactFC {...chartConfigs} />
                    </div>
                </div>
                <div className="card">
                    <div className="col-12 col-md-12">
                    <ReactFCC {...chartConfigss} />
                    </div>
                </div>
            </div>
        )
    }
}


export default DeviceDetails;