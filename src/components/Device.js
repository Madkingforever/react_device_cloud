import React from 'react';

class Device  extends React.Component{
    render(){
        return(
         <form onSubmit={this.props.get_RealData}>
             <input type='text' name='deviceUuid' placeholder='Device Uuid...' />
             <input type='text' name='thingModel' placeholder='Thing Model...' />
             <input type='text' name='parameter' placeholder='Parameter...' />
             <button>Device Real Data </button>
         </form>
        )
    }
}


export default Device;