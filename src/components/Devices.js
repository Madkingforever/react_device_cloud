import React from 'react';

class Devices  extends React.Component{
    state={
        total:'',
    }
    handleSearchChange = e => {
        const value = e.target.value;  } 

    render(){
        return(
            <div>
                <form onSubmit={this.props.get_Devices}>
                    <input type='text' name='page' placeholder='Client ID...' />
                    <input type='text' name='size' placeholder='Secret...' />
                    <button>Our Devices</button>
                </form>  

                <p>Devices display comming soon!</p>      



            </div>
                
            
        )
    }
}


export default Devices;