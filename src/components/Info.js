import React from 'react'


class Info  extends React.Component{
    render(){
        return(
        <div>
            <p>{this.props.name}</p>
            <p>{this.props.uuid}</p>
            <p>{this.props.industry}</p>
            <p>{this.props.domain}</p>
        </div>
        )
    }
}



export default Info;