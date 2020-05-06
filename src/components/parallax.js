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

      if(this.state.width<=2000 && this.state.width>=1201)
      {
          this.offsetY=1;
      }
      if(this.state.width<=1200 && this.state.width>=1101)
      {
          this.offsetY=0.8;
      }
      if(this.state.width<=1100 && this.state.width>=1001)
      {
          this.offsetY=0.75;
      }
      if(this.state.width<=1000 && this.state.width>=901)
      {
          this.offsetY=0.65;
      }
      if(this.state.width<=900 && this.state.width>=801)
      {
          this.offsetY=0.60;
      }
      if(this.state.width<=800 && this.state.width>=701)
      {
          this.offsetY=0.64;
      }
      if(this.state.width<=700 && this.state.width>=600)
      {
          this.offsetY=0.62;
      }
      if(this.state.width<=600 && this.state.width>=572)
      {
          this.offsetY=0.6;
      }
      if(this.state.width<=571 && this.state.width>=520)
      {
          this.offsetY=0.6;
      }
      if(this.state.width<=519 && this.state.width>=400)
      {
          this.offsetY=0.6;
      }
      if(this.state.width<=399 && this.state.width>=300)
      {
          this.offsetY=0.5;
      }
      if(this.state.width<=299 && this.state.width>=150)
      {
          this.offsetY=0.5;
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

        <ParallaxLayer offset={1} speed={0}>
            <About />
        </ParallaxLayer>


          <ParallaxLayer offset={3} speed={0}>
            <span>Window size: {offset}</span>
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

