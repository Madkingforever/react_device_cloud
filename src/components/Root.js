import React from 'react';

class Root  extends React.Component{
    render(){
        return(
         <form onSubmit={this.props.getToken}>
             <input type='text' name='clientId' placeholder='Client ID...' />
             <input type='text' name='secret' placeholder='Secret...' />
             <button>get token</button>
         </form>
        )
    }
}


export default Root;