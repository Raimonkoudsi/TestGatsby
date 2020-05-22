import React from "react";

import Title from '../components/title';
import Slider from '../components/slider';
import About from '../components/about';
import Team from '../components/team';
import Header from '../components/header';
import Contact from '../components/contact';

import bgCelda from '../imgs/background/3.png';

import { Parallax, Background } from 'react-parallax';



class Index extends React.Component {


    render(){

        return(
            <div>



            <div class="parallax">

            <Header />
                    


                <div class="parallax__layer parallax__layer__0">
                    <img src={bgCelda} />
                </div>



            <Title />




                <About />
                <Slider />
                <Team />
                <Contact />

                </div>
            </div>

        );
    };

}
export default Index;


