import React from 'react';
import {
  CChartLine,
  CChartDoughnut
} from '@coreui/react-chartjs';

import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'


const Dashboard = () => {
  return (
    <>
      <div className="row" style={{fontFamily: "MONOSPACE"}}>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{background:"linear-gradient(135deg, #13f1fc 0%,#0470dc 100%)", color:"white"}}>
            <div className="card-body">
              <h5> <strong>Active 200</strong></h5>
            </div>
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label="Members"
              labels="months"
            />
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{background:"linear-gradient(135deg, #FF57B9 0%,#A704FD 100%)", color:"white"}}>
            <div className="card-body">
              <h5> <strong>Offline 50</strong></h5>
            </div>
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Members"
              labels="months"
            />
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{background:"linear-gradient(135deg, #DFEC51 0%,#73AA0A 100%)", color:"white"}}>
            <div className="card-body">
              <h5> <strong>Online 20</strong></h5>
            </div>
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{background:"linear-gradient(135deg, #f2d50f 0%,#da0641 100%)", color:"white"}}>
            <div style={{ backgroundImage: "url(https://www.nupco.com/wp-content/uploads/2020/02/about-nupco-bg-02@3x.png)",
    backgroundPosition: "top left", backgroundRepeat: "no-repeat", backgroundSize: "70% auto"}}>
              <div className="card-body">
                <h5> <strong>Total 270</strong></h5>
              </div>
              <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
            </div>
          </div>     
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">Alerts</div>
            <div className="card-body">
              <div className="table-responsive table-outline" style={{height: "230px"}}>
                <table className="table table-hover">
                  <thead>
                    <tr className="table-primary">
                      <th>Device ID</th>
                      <th>Description</th>
                      <th>Type</th>
                      <th>Warning</th>
                      <th>Action</th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1002</td>
                      <td>Temperature</td>
                      <td>Minor</td>
                      <td>38</td>
                      <td><span className="badge badge-warning">Check</span></td>
                      <td>10 sec ago</td>
                    </tr>
                    <tr>
                      <td>1003</td>
                      <td>Temperature</td>
                      <td>Major</td>
                      <td>45</td>
                      <td><span className="badge badge-warning">Check</span></td>
                      <td>1 min ago</td>
                    </tr>
                    <tr>
                      <td>1004</td>
                      <td>Temperature</td>
                      <td>Minor</td>
                      <td>38</td>
                      <td><span className="badge badge-warning">Check</span></td>
                      <td>10 mins ago</td>
                    </tr>
                    <tr>
                      <td>1005</td>
                      <td>Temperature</td>
                      <td>Minor</td>
                      <td>38</td>
                      <td><span className="badge badge-warning">Check</span></td>
                      <td>10 mins ago</td>
                    </tr>
                    <tr>
                      <td>1006</td>
                      <td>Temperature</td>
                      <td>Minor</td>
                      <td>38</td>
                      <td><span className="badge badge-warning">Check</span></td>
                      <td>10 mins ago</td>
                    </tr>
                    <tr>
                      <td>1007</td>
                      <td>Temperature</td>
                      <td>Minor</td>
                      <td>38</td>
                      <td><span className="badge badge-warning">Check</span></td>
                      <td>10 mins ago</td>
                    </tr>
                    <tr>
                      <td>1008</td>
                      <td>Temperature</td>
                      <td>Minor</td>
                      <td>38</td>
                      <td><span className="badge badge-warning">Check</span></td>
                      <td>10 mins ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
        <div className="col-6">
        <div className="card">
        <div className="card-header">
          Doughnut Chart
        </div>
        <div className="card-body">
          <CChartDoughnut
            datasets={[
              {
                backgroundColor: [
                  '#0786E2',
                  '#D02ADD',
                  '#91BD1E'
                ],
                data: [200, 50, 20]
              }
            ]}
            labels={['Active', 'Offline', 'Online']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
