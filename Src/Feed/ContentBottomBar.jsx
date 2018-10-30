import React,{ Component } from 'react'
import Icon from '../BasicComponent/Icon.jsx'
import IconTag from '../BasicComponent/IconTag.jsx'
import ProfilePic from '../BasicComponent/ProfilePic.jsx'

class ContentBottomBar extends Component{
    render(){
        
        return (
                    <div className='ContentBottomBar'>
                        <Icon IconClass='fa fa-thumbs-up' IconContainer='IconContainerLike' />
                        <IconTag tagName='Like' IconTagg='IconTagg' IconTagContainer='IconTagContainerLike'/>
                        <Icon IconClass='fa fa-comment' IconContainer='IconContainerComment' />
                        <IconTag tagName='Comment' IconTagg='IconTagg' IconTagContainer='IconTagContainerComment'/>
                        <Icon IconClass='fa fa-share-alt' IconContainer='IconContainerShare' />
                        <IconTag tagName='Share' IconTagg='IconTagg' IconTagContainer='IconTagContainerShare'/>
                        <ProfilePic source='./Src/Data/pic.jpg' Pic='ContentBottomBarPic' ProfilePic='ContentBottomProfile'/>
                    </div>

                )
    }
}

export default ContentBottomBar
