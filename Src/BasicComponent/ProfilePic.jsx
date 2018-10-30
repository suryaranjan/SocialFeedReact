import React,{ Component } from 'react'

class ProfilePic extends Component{
    render(){
        
       
        return(
                <div className={this.props.ProfilePic}>
                    <img className={this.props.Pic} src={this.props.source}></img>
                </div>
                )
    }
}

export default ProfilePic