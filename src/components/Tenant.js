import React from 'react';

class Tenant  extends React.Component{
    
    render(){
      
        return(
            <form onSubmit={this.props.getTenant}>      
            <button>Tenant Information</button>
           </form>               
            
        );
    }
}


export default Tenant;