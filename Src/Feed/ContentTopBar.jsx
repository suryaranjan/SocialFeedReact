import React, {Component} from 'react'
import ProfilePic from '../BasicComponent/ProfilePic.jsx'
import IconTag from '../BasicComponent/IconTag.jsx'
import Icon from '../BasicComponent/Icon.jsx'

class ContentTopBar extends Component
{
    render(){
        return(
                  <div className="ContentTopBar">
                    <ProfilePic source="./Src/Data/pic.jpg" Pic="ContentProfilePic" ProfilePic="ContentProfile"/>
                    <div className="ContentTopBarHeading">
                        <span className="FirstPart">Deadpool</span><span className='SecondPart'> changed their </span><span className='ThirdPart'>cover photo</span><br/>
                        <IconTag IconTagg='IconTagg' IconTagContainer='IconTagContainerWorld' tagName='2 mins'/>
                        <Icon IconClass='fa fa-globe ' IconContainer='IconContainerWorld'/>
                    </div>
                </div>
                
                )
    }
}

export default ContentTopBar;