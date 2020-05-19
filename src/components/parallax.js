import React, {Component} from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import bgCelda from '../imgs/background/3.png';
import Title from './title';
import Slider from './slider';
import About from './about';
import Team from './team';
import Header from './header';
import Contact from './contact';

//CAMBIOS DE ANCHURA
import ReactResizeDetector from 'react-resize-detector';

import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";


class ParallaxBackground extends React.Component {

  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {

      var widthScreen = (window.innerWidth > 0) ? window.innerWidth : 0;

      this.state = {width:  widthScreen, isShow: true, isShowTeam: true, isShowContact:true};
    }

    this.onResize();

  }


  onResize = () => {

    if (typeof window !== 'undefined') {

      var widthScreen = (window.innerWidth > 0) ? window.innerWidth : 0;

      this.setState({ width: widthScreen});

      if(this.state.width<=2000 && this.state.width>=1200)
      {
          this.offsetY=5.5;
      }
      if(this.state.width<=1199 && this.state.width>=1101)
      {
          this.offsetY=5.5;
      }
      if(this.state.width<=1100 && this.state.width>=1001)
      {
          this.offsetY=5.5;
      }
      if(this.state.width<=1000 && this.state.width>=920)
      {
          this.offsetY=5.3;
      }
      if(this.state.width<=919 && this.state.width>=801)
      {
          this.offsetY=6.05;
      }
      if(this.state.width<=800 && this.state.width>=701)
      {
          this.offsetY=7.4;
      }
      if(this.state.width<=700 && this.state.width>=600)
      {
          this.offsetY=7.4;
      }
      if(this.state.width<=600 && this.state.width>=572)
      {
          this.offsetY=7.4;
      }
      if(this.state.width<=571 && this.state.width>=520)
      {
          this.offsetY=7.5;
      }
      if(this.state.width<=519 && this.state.width>=400)
      {
          this.offsetY=9.7;
      }
      if(this.state.width<=399 && this.state.width>=300)
      {
          this.offsetY=9.7;
      }
      if(this.state.width<=299 && this.state.width>=150)
      {
          this.offsetY=9.7;
      }
    }

    return this.offsetY;

  };

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
      var offset=this.offsetY;

    return(

    <div>

      <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}> 
        <Header variable={this.state.isShow} variableTeam={this.state.isShowTeam} variableContact={this.state.isShowContact}/>
        <Parallax pages={offset} scrolling={true} vertical ref={ref => (this.parallax = ref)}>

        <ParallaxLayer offset={0} speed={-1}>
            <div className="bg-parallax">
              <img src={bgCelda} className="bg-title" />
            </div>
          </ParallaxLayer>



          <ParallaxLayer offset={0} speed={-0.4}>
            <div className="bg-parallax">
              <img src={bgCelda} className="bg-title" />
            </div>
          </ParallaxLayer>




          <ParallaxLayer offset={0.05} speed={1}>
            <Title />
          </ParallaxLayer>


          <ParallaxLayer offset={1} speed={0}>
            <div className="area">

              <VisibilitySensor partialVisibility minTopValue={300} offset={{top:290}} onChange={this.onMenu} >
                {({ isVisible }) => (
                  <Spring delay={200} to={{ opacity: isVisible ? 1 : 1 }}>
                    {({ opacity }) => <div className="space-header-about" style={{opacity}} id="about"><div className="space-background"><About /><div classname="area2"><Slider /></div></div></div>}
                  </Spring>
                )}
              </VisibilitySensor>

              <VisibilitySensor partialVisibility minTopValue={400} offset={{top:200}} onChange={this.onMenu2} >
                {({ isVisible }) => (
                  <Spring delay={200} to={{ opacity: isVisible ? 1 : 1 }}>
                    {({ opacity }) => <div style={{opacity}} id="team"><Team /></div>}
                  </Spring>
                )}
              </VisibilitySensor>

              <VisibilitySensor partialVisibility minTopValue={490} offset={{top:200}}  onChange={this.onMenu3} >
                {({ isVisible }) => (
                  <Spring delay={200} to={{ opacity: isVisible ? 1 : 1 }}>
                    {({ opacity }) => <div style={{opacity}} id="contact"><Contact /></div>}
                  </Spring>
                )}
              </VisibilitySensor>

            </div>
          </ParallaxLayer>

        </Parallax>

      </ReactResizeDetector>
   
    </div>
    )
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }


};

export default ParallaxBackground;

