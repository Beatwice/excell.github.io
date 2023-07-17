import React, { Component, Fragment } from 'react';
import Header from '../../../components/header/Header';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../../../components/footer/footer';
import { Carousel } from 'react-responsive-carousel';
import Vaksin1 from "../../../assets/img_carousel/vaksin1.png";
import Vaksin2 from "../../../assets/img_carousel/vaksin2.png";
import Vaksin3 from "../../../assets/img_carousel/vaksin3.png";
import Vaksin4 from "../../../assets/img_carousel/vaksin4.png";

const Vaccine = () => {
    return(
        <div>
            <Header/>
            <br />
            <br />
            <p className='text-center text-5xl font-bold' style={{color: '#393646', opacity: 0.9}} >Vaccine App</p>
            <br />
            <div className='container mx-auto px-24'>
            <div className='flex justify-center'>
                        <Carousel autoPlay={true} infiniteLoop={true} className='carousel-container' showArrows={false}>
                            <div>
                                <img src={Vaksin1} />
                            </div>
                            <div>
                                <img src={Vaksin2} />
                            </div>
                            <div>
                                <img src={Vaksin3} />
                            </div>
                            <div>
                                <img src={Vaksin4} />
                            </div>
                        </Carousel>
                        </div>
                <Footer/>
            </div>
            <br />
        </div>
    );
}

export default Vaccine;