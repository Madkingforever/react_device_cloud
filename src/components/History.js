import React from 'react';

class History  extends React.Component{
    render(){
        return(
         <form onSubmit={this.props.get_HistoryData}>
             <input type='text' name='deviceUuid' placeholder='Device Uuid...' />
             <input type='text' name='startTime' placeholder='Start Time...' />
             <input type='text' name='parameter' placeholder='Parameter...' />
             <button>Display History Data </button>
         </form>
        )
    }
}


export default History;