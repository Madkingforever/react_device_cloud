
import React, { Component }  from 'react';

function SingalDevice(props){
  const castings=props.castings;
  const listcastings=castings.map((casting)=>{
    return (<div key={casting.deviceUuid}>
    <h1>{casting.deviceName}</h1>
    </div>)
  });
  return(
    <div>{castings}</div>
  )
}


export default SingalDevice