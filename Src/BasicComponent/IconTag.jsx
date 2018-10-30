import React,{ Component } from 'react'

class IconTag extends Component
{
    render(){
        
    
        return(
                <div className={this.props.IconTagContainer}>
                    <p className={this.props.IconTagg}>
                        {this.props.tagName}
                    </p>
                </div>
                
                );
    }
}
 export default IconTag