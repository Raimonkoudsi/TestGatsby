import React from "react";
import {Carousel} from 'react-bootstrap';

import slider1 from "../imgs/slider/1.png";
import slider2 from "../imgs/slider/2.png";
import slider3 from "../imgs/slider/3.png";



export default () => (

<div className="area">
  <div className="container">

  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider1}
        alt="First slide"
      />
      <Carousel.Caption>
        <div className="bgText bgTextAlignRight">
          <div className="sliderText">
            <h3 className="titleCarousel">Discover this decaying world and meet new allies</h3>
            <p className="textCarousel">Explore different cultures and learn the entire story from every country and faction in your quest to discover who Donovan is as you immerse yourself in all the Factions, rebels, mutants and fear.</p>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider2}
        alt="Third slide"
      />
      <Carousel.Caption>
        <div className="bgText bgTextAlignLeft">
            <div className="sliderText">
              <h3 className="titleCarousel">Survive adversity</h3>
              <p className="textCarousel">Feel the Shoot n’ Fight mechanics and survive the challenging enemies who want you dead. Scarcity is constant, provisions are rare and so your chances to survive.</p>
            </div>
          </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slider3}
        alt="Third slide"
      />
      <Carousel.Caption>
        <div className="bgText bgTextAlignRight">
            <div className="sliderText">
              <h3 className="titleCarousel">Experience a unique story.</h3>
              <p className="textCarouselFinal">A story that naturally flows, about broken politics where the only ones who suffer are the civilians… An existential journey about who we are, and our own origins, with an atypical focus on violence in a dystopian society. All of it through the lifeless eyes of Donovan, a man whom the world has forgotten.</p>
            </div>
          </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </div>
</div>
)

