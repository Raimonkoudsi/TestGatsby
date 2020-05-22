import React, {Component} from 'react';
import bgCelda from '../imgs/background/3.png';
import Title from './title';
import Slider from './slider';
import About from './about';
import Team from './team';
import Header from './header';
import Contact from './contact';

//CAMBIOS DE ANCHURA
import ReactResizeDetector from 'react-resize-detector';


import VisibilitySensor from "react-visibility-sensor";


class ParallaxBackground extends React.Component {

  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {

      var widthScreen = (window.innerWidth > 0) ? window.innerWidth : 0;

      this.state = {width:  widthScreen, isShow: true, isShowTeam: true, isShowContact:true};
    }

    this.onResize();
    this.onMenu();
    this.onMenu2();
    this.onMenu3();

    /*
    this.onResize= this.onResize.bind(this);
    this.onMenu=this.onMenu.bind(this);
    this.onMenu2=this.onMenu2.bind(this);
    this.onMenu3=this.onMenu3.bind(this);
  */

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
          this.offsetY=10.35;
      }
      if(this.state.width<=299 && this.state.width>=150)
      {
          this.offsetY=10.55;
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

      const menuCharge = () => {
        if (this.state) {
          return <Header variable={this.state.isShow} variableTeam={this.state.isShowTeam} variableContact={this.state.isShowContact}/>;
        } else {
          return <Header />;
        }
      }

    return(

    <div>

      <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}> 
        {menuCharge()}
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

