import React,{ Component } from 'react'
class  Icon extends Component
{
    
    render(){
       
        return(
                 <div  className={this.props.IconContainer}>
                    <i className={this.props.IconClass}></i>
                </div>
                )
    }   
}
 export default Icon