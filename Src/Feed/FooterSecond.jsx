import React,{ Component } from 'react'
import Icon from '../BasicComponent/Icon.jsx'
import IconTag from '../BasicComponent/IconTag.jsx'

class FooterSecond extends Component {
    
    render(){
        
        return(
                <div className='FooterSecond'>
                    <Icon IconClass='fa fa-thumbs-up' IconContainer='IconContainerLikes' />
                    <Icon IconClass='fa fa-heart' IconContainer='IconContainerHeart' />
                    <Icon IconClass='em em-astonished' IconContainer='IconContainerAstonished' />
                    <IconTag tagName='1.6M' IconTagg='IconTagg' IconTagContainer='BottomBarIcontag'/>
                    <IconTag tagName="&#x25BE;" IconTagContainer="IconTagContainerRight" IconTagg="IconTagg" />    
                    <IconTag tagName='Top Comments' IconTagg='IconTagg' IconTagContainer='BottomBarSecondIcontag'/>

                </div>
                
                )
    }
}
export default FooterSecond