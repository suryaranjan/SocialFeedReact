import React, { Component } from 'react'
import Icon from '../BasicComponent/Icon.jsx'
import IconTag from '../BasicComponent/IconTag.jsx'
import ProfilePic from '../BasicComponent/ProfilePic.jsx'

class TopBar extends Component
{

    render(){
        
        return (
                <div className="TopBar">
                    <Icon IconClass="fa fa-edit" IconContainer="IconContainerEdit"/>
                    <IconTag tagName="Status" IconTagContainer="IconTagContainer" IconTagg="IconTagg" />
                    <Icon IconClass="fa fa-camera" IconContainer="IconContainerCamera"/>
                    <IconTag tagName="Photo/Video"  IconTagContainer="IconTagContainerCamera" IconTagg="IconTagg"/>
                    <IconTag tagName="&#x25BE;" IconTagContainer="IconTagContainerRight" IconTagg="IconTagg" />           
                    <ProfilePic source="./Src/Data/pic.jpg" Pic="pic" ProfilePic="ProfilePicTopbar"/>                   
                </div>
                );
    }
}
export default TopBar