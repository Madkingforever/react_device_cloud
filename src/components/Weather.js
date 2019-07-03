import React from 'react';

class Weather extends React.Component{ 

  
    render(){
        return (
            <div> 
               <p>This comes weather information!</p>
               <h1>Total Devices:{this.props.total}</h1>
               <p>{this.props.rows}</p>
            </div>
        )
    }
}


export default Weather;