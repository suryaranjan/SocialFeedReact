import React, {Component} from 'react'
import ContentTopBar from './ContentTopBar.jsx'
import ProfilePic from '../BasicComponent/ProfilePic.jsx'
import ContentBottomBar from '../Feed/ContentBottomBar.jsx'

class Content extends Component
{
    render(){
        
        return(
                
                <div>
                    <ContentTopBar/>
                    <ProfilePic source='./Src/Data/sunset.jpg' Pic='ContentMainPic' ProfilePic='ContentMainProfile'/>
                    <ContentBottomBar/>
                </div>
                
                )
    }
}
export default Content