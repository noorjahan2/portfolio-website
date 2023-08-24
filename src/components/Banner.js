import React, { useEffect, useState } from 'react'
import slider from "../images/slider.jpg"
import slider2 from "../images/slider-2.jpg"
import slider3 from "../images/slider-3.jpg"
import slider4 from "../images/slider-4.jpg"
import slider5  from "../images/slider-5.jpg"
import slider6  from "../images/slider-6.jpg"
import { Carousel, Button, Container, Row } from "react-bootstrap";

import { BiChevronRight} from "react-icons/bi";
import $ from 'jquery';
import "../css/banner.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slide from '../carousel/Slide'





const Banner = () => {

 
  
  
  return (
   <>
   
   <div className="slider index-3">
            <OwlCarousel className="owl-main  owl-theme" items={1} loop autoplay id='slider' nav>
                <Slide img={slider} title="Think Big Do Creative Grow Business " />
                <Slide img={slider2} title="Think Big Do Creative Grow Business "/>
                <Slide img={slider3} title="Think Big Do Creative Grow Business " />
                <Slide img={slider4} title="Think Big Do Creative Grow Business " />
            </OwlCarousel>
        </div>
   
   </>


)}

export default Banner
