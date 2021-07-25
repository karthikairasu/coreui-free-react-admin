import React from 'react';
import { Link } from 'react-router-dom';

const Devices = () => {
  return (
    <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="card px-2 py-2" style={{}}>
            <div className="card-header px-1">
              <div>
                <strong>Device # 10001</strong>
              </div>
              <div className="text-warning">
                <small>Riyadh</small>
              </div>
              <span className="badge badge-success" style={{position:"absolute", right: "5%", top:"10%"}}>&ensp;</span>
            </div>
            <div className="card-body d-flex jus">
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Temperature</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Humidity</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Battery</div>
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
        
        <div className="col-md-6 col-lg-6">
          <div className="card px-2 py-2" style={{}}>
            <Link to="/devices/DeviceDetails">
            <div className="card-header px-1">
              <div>
                <strong>Device # 10002</strong>
              </div>
              <div className="text-warning">
                <small>Riyadh</small>
              </div>
              <span className="badge badge-success" style={{position:"absolute", right: "5%", top:"10%"}}>&ensp;</span>
            </div>
            <div className="card-body d-flex jus">
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Temperature</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Humidity</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Battery</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
            </div>
            <div className="card-footer border-0 px-2 py-1">
              <div className="text-secondary">
                last update @ 07/13/2021 07:58PM
              </div>
            </div>
          </Link> 
          </div>  
        </div>
        
        <div className="col-md-6 col-lg-6">
          <div className="card px-2 py-2" style={{}}>
            <div className="card-header px-1">
              <div>
                <strong>Device # 10003</strong>
              </div>
              <div className="text-warning">
                <small>Riyadh</small>
              </div>
              <span className="badge badge-danger" style={{position:"absolute", right: "5%", top:"10%"}}>&ensp;</span>
            </div>
            <div className="card-body d-flex jus">
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Temperature</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Humidity</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Battery</div>
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
        
        <div className="col-md-6 col-lg-6">
          <div className="card px-2 py-2" style={{}}>
            <div className="card-header px-1">
              <div>
                <strong>Device # 10004</strong>
              </div>
              <div className="text-warning">
                <small>Riyadh</small>
              </div>
              <span className="badge badge-success" style={{position:"absolute", right: "5%", top:"10%"}}>&ensp;</span>
            </div>
            <div className="card-body d-flex jus">
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Temperature</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Humidity</div>
                 <div><strong>40</strong></div>
                 <div>cel</div>
              </div>
              <div className="col-4 text-center shadow-sm">
                 <div className="text-dark">Battery</div>
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

export default Devices;
