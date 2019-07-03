import React from 'react';
import SingalDevice from './Single'





const my_headers=new Headers();
my_headers.append('IrootechAuth','Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJMQTczR05EOCIsInJvbGVJZCI6NCwidGVuYW50SWQiOiI1NFNNVTAxIiwiYXBwQ29kZSI6IkxBNzNHTkQ4IiwiZXhwIjoxNTU0MzQwNjg2fQ.c-VKsolQEJSrs97ETdvwBqO8QC9_gI6ZEQ8nKBCxzrInVtwuKnoD-a1gCs_wlwbfC5iphirH5Bk5krMbUtNfbw')
my_headers.append('Content-Type', 'application/json')
const HRK_URL='https://cors-anywhere.herokuapp.com/';
const RC_URL='https://apidev.rootcloud.com';


class Panel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            castings:[],
        };
    }

    componentDidMount(){
        let api_url='/dev-device/api/v1/queryDeviceData';     
        let my_devices={
          "deviceCode": "",
          "deviceName": "",
          "page": 1,
          "size": 10,
        }
        let options={
          'method':'POST',
          body:JSON.stringify(my_devices),
          headers:my_headers
    
        }
        fetch(HRK_URL+RC_URL+api_url,options)
        .then(res=>res.json())
        .then(json=>console.log(json))
        // .then(castings=>this.setState({'castings':castings}))
    }
    render(){
      
       
        return(
          <div>
             <h1>Working Harder</h1>
          <SingalDevice castings={this.state.castings} />

          </div>
         
          

        
        );
    }
}


export default Panel