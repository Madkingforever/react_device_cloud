import React from 'react';
// eslint-disable-next-line to the
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Root from './components/Root';
import Tenant from './components/Tenant'
import Devices from './components/Devices'
import Device from './components/Device'
import History from './components/History'
import Info from './components/Info';
import Panel from './components/Panel'

// api keys
const API_KEY='afd5ed5a923bee99fa6900f7a356afcc';
const Base='http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid='
const URL=Base+API_KEY

const HRK_URL='https://cors-anywhere.herokuapp.com/';
const RC_URL='https://apidev.rootcloud.com';

const my_headers=new Headers();
my_headers.append('IrootechAuth','Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJMQTczR05EOCIsInJvbGVJZCI6NCwidGVuYW50SWQiOiI1NFNNVTAxIiwiYXBwQ29kZSI6IkxBNzNHTkQ4IiwiZXhwIjoxNTU0MzQwNjg2fQ.c-VKsolQEJSrs97ETdvwBqO8QC9_gI6ZEQ8nKBCxzrInVtwuKnoD-a1gCs_wlwbfC5iphirH5Bk5krMbUtNfbw')
my_headers.append('Content-Type', 'application/json')





class App extends React.Component{
  state={
    total:undefined,
    name:undefined,
    uuid :undefined,
    industry:undefined,
    domain:undefined,   
  }
  
  getWeather=async( e )=>{   
    e.preventDefault();    
    
    const api_promise=await fetch(URL);
    const data =await api_promise.json();
        console.log(URL);
    console.log(data);
  }

  getToken=async(e)=>{
    e.preventDefault();
    // let api_url='https://apidev.rootcloud.com/dev-auth/auth/clientAuth'
    let my_secret={
      "clientId":'LA73GND8',
      "secret":'AJT7wSjsnsFwqsmzKj8LMFYdoS9M0xrJ',
    }
    const authToken=await fetch('https://cors-anywhere.herokuapp.com/https://apidev.rootcloud.com/dev-auth/auth/clientAuth',{
      method: 'POST', // or 'PUT'
      body: JSON.stringify(my_secret), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
        
      }
    });
    const my_token=await authToken.json();
    console.log(my_secret);
    console.log(my_token);
    const token=my_token.data
 
    console.log(token)
  }
  
  getTenant=async(e)=>{
    e.preventDefault();
    let api_url='https://apidev.rootcloud.com/dev-tenant/api/v1/getTenantDetail';    
    let options={
      'method':'POST',
      'headers':my_headers
    }
    const Call_Tenant=await fetch(HRK_URL+api_url,options)
    const Tenant=await Call_Tenant.json()
   
    console.log(HRK_URL+api_url)
    console.log(Tenant.data)
    this.setState({
      name :Tenant.data.name,
      uuid:Tenant.data.uuid,
      industry:Tenant.data.industry,
      domain:Tenant.data.domain
    })
  }

  get_Devices=async(e)=>{
    let api_url='/dev-device/api/v1/queryDeviceData';
    e.preventDefault();
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

    const Call_Devices=await fetch(HRK_URL+RC_URL+api_url,options)
    console.log(HRK_URL+RC_URL+api_url)
    const DevicesObj=await Call_Devices.json()
    console.log(DevicesObj.data) 
    this.setState({
      total: DevicesObj.data.total,
      rows:[],
      error: ""
    })

  }
get_RealData=async (e)=>{
  e.preventDefault();
  let api_url='/dev-device/api/v1/getDeviceRealTimeData'
  let my_body={
      "deviceUuid": [
        '2IPFRKM5XEO1'
      ],
      "properties": [
        'CNC_STATS_EMG','CNC_STATS_STDBYMODE','CNC_CNCMODE',
       'CNC_PARTSNUM','CYCLETIME','WORKTIME','POWERTIME'
      ],
      "thingModel": [
       'T2DS70O7X99S8'
      ]
     }
    let options={
      method:'POST',
      body:JSON.stringify(my_body),
      headers:my_headers,
      
    }
  
  const Call_RealData=await fetch(HRK_URL+RC_URL+api_url,options)
  // console.log(Call_RealData)
  const my_RealData=await Call_RealData.json()
  console.log(my_RealData.data)
  // const RealData=await my_RealData.data
  // console.log(RealData)
}

get_HistoryData=async (e)=>{
  e.preventDefault();
  let api_url='/dev-device/api/v1/getDeviceHistoryData'
  let my_body= [{
    "deviceUuid": "2IPFRKM5XEO1",
    "endDateTime": "2019-03-21T09:00:00.000Z",
    "fillType": 0,
    "insertType": 0,
    "page": 2,
    "properties": ["CNC_PARTSNUM",'POWERTIME'],
    "size": 50,
    "sort": 0,
    "startDateTime": "2019-03-20T08:52:59.005Z"
  }]
  let options={
    method:'POST',
    headers:my_headers,
    body:JSON.stringify(my_body),
  }
  const Call_HistoryData=await fetch(HRK_URL+RC_URL+api_url,options);
  const my_HistoryData=await Call_HistoryData.json();
  console.log(my_HistoryData.data)
  console.log('Fetching Device History Data......')
}


  render(){
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
        total={this.state.total} 
        rows={this.state.rows}
        />
        <Root getToken={this.getToken}/>
        <Tenant getTenant={this.getTenant}/>
        <Info
        name={this.state.name}
        uuid={this.state.uuid}
        industry={this.state.industry}
        domain={this.state.domain} 
        />
        <Devices get_Devices={this.get_Devices}/>
        <Device get_RealData={this.get_RealData}/>
        <History get_HistoryData={this.get_HistoryData} />
        <Panel />

        
        
      </div>
   
    )
  }
}

export default App;