import React, { Component } from 'react';
import TopBar from './Feed/TopBar.jsx'
import TopSecondBar from './Feed/TopSecondBar.jsx'
import Content from './Feed/Content.jsx'
import FooterSecond from './Feed/FooterSecond.jsx'
import Footer from './Feed/Footer.jsx'

class App extends Component{
    
    render(){
            
        return(
                <div className="MainContainer">
                   <div className="Top">                        
                        <TopBar/>
                        <TopSecondBar/>
                    </div>
                    <div className="Bottom">
                        <Content/>
                        <div className="MainFooter">
                            <FooterSecond/>
                            <Footer/>
                        </div>
                    </div>
                  </div>
                )
    }
}
 export default App

