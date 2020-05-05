import React, { Component } from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import bgCelda from '../imgs/background/3.png';
import Title from './title';
import Slider from './slider';
import About from './about';
import AboutRepos from './aboutrepos';
//chaNGES

import ReactResizeDetector from 'react-resize-detector';

class ParallaxBackground extends React.Component {

  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {

      var widthScreen = (window.innerWidth > 0) ? window.innerWidth : 0;

      this.state = {width:  widthScreen};
    }
    this.onResize();

  }

  onResize = () => {

    if (typeof window !== 'undefined') {

      var widthScreen = (window.innerWidth > 0) ? window.innerWidth : 0;

      this.setState({ width: widthScreen});

      if(this.state.width<=1500 && this.state.width>=700)
      {
          this.offsetY=1;
      }
      if(this.state.width<=800 && this.state.width>=701)
      {
          this.offsetY=0.50;
      }
      if(this.state.width<=700 && this.state.width>=600)
      {
          this.offsetY=0.45;
      }
      if(this.state.width<=600 && this.state.width>=572)
      {
          this.offsetY=0.42;
      }
      if(this.state.width<=571 && this.state.width>=520)
      {
          this.offsetY=0.38;
      }
      if(this.state.width<=519 && this.state.width>=400)
      {
          this.offsetY=0.32;
      }
      if(this.state.width<=399 && this.state.width>=300)
      {
          this.offsetY=0.28;
      }
      if(this.state.width<=299 && this.state.width>=150)
      {
          this.offsetY=0.25;
      }
    }

    return this.offsetY;

  };
  


    render(){
      var offset=this.offsetY;
    return(



    <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}> 

      <Parallax pages={6} scrolling={true} vertical ref={ref => (this.parallax = ref)}> 



      
        <ParallaxLayer offset={0} speed={-0.4}>
          <div className="bg-parallax">
            <img src={bgCelda} className="bg-title" />
          </div>

        </ParallaxLayer>

        <ParallaxLayer offset={0.05} speed={1}>
          <Title />
        </ParallaxLayer>


          <ParallaxLayer offset={3} speed={0}>
            <span>Window size: {offset}</span>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0}>
            <About />
          </ParallaxLayer>

      </Parallax>
    </ReactResizeDetector>
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

