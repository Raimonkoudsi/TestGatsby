import React from "react";

import Title from '../components/title';
import Slider from '../components/slider';
import About from '../components/about';
import Team from '../components/team';
import Header from '../components/header';
import Contact from '../components/contact';

import bgCelda from '../imgs/background/3.png';

import { Parallax, Background } from 'react-parallax';

import VisibilitySensor from "react-visibility-sensor";



class Index extends React.Component {
    constructor(props) {
        super(props);

        if (typeof window !== 'undefined') {

            var widthScreen = (window.innerWidth > 0) ? window.innerWidth : 0;
      
            this.state = {width:  widthScreen, isShow: true, isShowActive: true, isShowTeam: true,isShowTeamActive:true, isShowContact:true, isShowContactActive:true};
        }
    
        this.onMenu();
        this.onMenu2();
        this.onMenu3();


    
      }

    onMenu = () => {
        this.setState(state => ({ isShow: !state.isShow }));
      }
      
      onMenu2 = () => {
        this.setState(state => ({ isShowTeam: !state.isShowTeam }));
      }
    
      onMenu3 = () => {
        this.setState(state => ({ isShowContact: !state.isShowContact }));
      }

    render(){

        const menuCharge = () => {
            if (this.state) {
              return <Header variable={this.state.isShow} variableTeam={this.state.isShowTeam} variableContact={this.state.isShowContact}/>;
            } else {
              return <Header />;
            }
          }

        return(
            <div>

            {menuCharge()}

            <div class="parallax">

                <div  id="home" />
                    


                <div class="parallax__layer parallax__layer__0">
                    <img src={bgCelda} />
                </div>



            <Title />

                <VisibilitySensor partialVisibility minTopValue={300} offset={{top:290}} onChange={this.onMenu} >
                    {() => <div className="space-header-about" id="about"><div className="space-background"><About /><div classname="area2"><Slider /></div></div></div>}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility minTopValue={400} offset={{top:200}} onChange={this.onMenu2} >
                    {() => <div id="team"><Team /></div>}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility minTopValue={490} offset={{top:200}}  onChange={this.onMenu3} >
                    {() => <div id="contact"><Contact /></div>}
                </VisibilitySensor>

                </div>
            </div>

        );
    };

}
export default Index;


