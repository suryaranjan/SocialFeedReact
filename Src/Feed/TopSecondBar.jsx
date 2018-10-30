import React, { Component } from 'react'
import ProfilePic from '../BasicComponent/ProfilePic.jsx'


class TopSecondBar extends Component {
    render(){
        
        return(
                <div className="TopSecondBar">
                    <ProfilePic source="./Src/Data/pic.jpg" ProfilePic="ProfilePicSecondBar" Pic="PicSecondBar"/>
                    <input type="text" className="TopSecondBarInput" placeholder="Write something about you..."/>
                </div>
                )
    }
}

export default TopSecondBar