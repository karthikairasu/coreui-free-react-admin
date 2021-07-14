import React, { Component } from 'react'

class time extends Component {
    state = {
        time: new Date(),
        date: new Date()
    };
    

    callMe(){
        setInterval(()=>{
            this.setState({time:new Date()});
            this.setState({date:new Date()});
        }, 1000);
    }

    render() {
        const options = {  month: 'long', year: 'numeric', day: 'numeric' };
        return (
            <div>
               <div><strong> {this.state.time.toLocaleTimeString()}</strong></div>
               <div><span> {this.state.date.toLocaleDateString(undefined, options)}</span></div> 
               {this.callMe()}
            </div>
        )
    }
}

export default time;