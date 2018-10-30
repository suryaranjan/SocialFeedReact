import React ,{ Component } from 'react'
import ProfilePic from '../BasicComponent/ProfilePic.jsx'
import Icon from '../BasicComponent/Icon.jsx'

class Footer extends Component {
    
    render(){
        
        return(
                <div className='Footer'>
                     <ProfilePic source="./Src/Data/pic.jpg" Pic="FooterProfilePic" ProfilePic="FooterProfile"/>
                     <input type='text' className='FooterInput' placeholder='Write a Comment...' />
                     <Icon IconClass='fa fa-camera-retro' IconContainer='IconFooterCamera' />
                    <Icon IconClass='fa fa-smile-o' IconContainer='IconFooterEmoji' />
                        
                </div>
                )
    }
}export default Footer
