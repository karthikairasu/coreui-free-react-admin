import React from 'react';


const Dashboard = () => {
  return (
    <>
      <div className="row" style={{fontFamily: "MONOSPACE"}}>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{background:"linear-gradient(135deg, #13f1fc 0%,#0470dc 100%)", color:"white"}}>
            <div className="card-body">
              <h5> <strong>Active 200</strong></h5>
            </div>
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{background:"linear-gradient(135deg, #FF57B9 0%,#A704FD 100%)", color:"white"}}>
            <div className="card-body">
              <h5> <strong>Offline 50</strong></h5>
            </div>
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{background:"linear-gradient(135deg, #DFEC51 0%,#73AA0A 100%)", color:"white"}}>
            <div className="card-body">
              <h5> <strong>Online 20</strong></h5>
            </div>
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{background:"linear-gradient(135deg, #f2d50f 0%,#da0641 100%)", color:"white"}}>
            <div style={{ backgroundImage: "url(https://www.nupco.com/wp-content/uploads/2020/02/about-nupco-bg-02@3x.png)",
    backgroundPosition: "top left", backgroundRepeat: "no-repeat", backgroundSize: "70% auto"}}>
              <div className="card-body">
                <h5> <strong>Total 270</strong></h5>
              </div>
            </div>
          </div>     
        </div>
      </div>
    </>
  )
}

export default Dashboard
