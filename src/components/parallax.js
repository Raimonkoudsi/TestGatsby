import React, { Component } from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import bgCelda from '../imgs/background/3.png';
import Title from './title';
import Slider from './slider';
//chaNGES

import ReactResizeDetector from 'react-resize-detector';

class ParallaxBackground extends React.Component {

  constructor(props) {
    super(props);

    // Don't call this.setState() here!
    //this.offsetY=0;
    if (typeof window !== 'undefined') {
      this.state = {width:  window.innerWidth};

 
    }
    this.onResize();

  }

  onResize = () => {

    if (typeof window !== 'undefined') {
    this.setState({ width: window.innerWidth});

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
  }

    return this.offsetY;

  };
  


    render(){
      var offset=this.offsetY;
    return(

    <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}> 
    <Parallax pages={6} scrolling={true} vertical ref={ref => (this.parallax = ref)}> 



    
      <ParallaxLayer offset={0} speed={-0.4}>
        <img src={bgCelda} style={{width: '100%', marginLeft: '0%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.05} speed={1}>
        <Title />
      </ParallaxLayer>
      
        <ParallaxLayer offset={offset} speed={0}>
          <Slider />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
    <span>Window size: {this.state.width} x {offset}</span>
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
