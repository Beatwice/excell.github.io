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
import { Link } from 'react-router-dom';

const Vaccine = () => {
    return(
        <div style={{background:"white"}}>
        <Header/>
        <div className='px-20 max-sm:px-0 max-sm:pt-2 max-sm:px-4 max-sm:pb-20'>
            <br />
            <ul className='flex text-sm pt-16 max-sm:pt-10' style={{color:"#333333"}}>
                <li><Link to='/project/ui_design' className='hover:underline'>Ui Design</Link></li>
                <li>
                    <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                </li>
                <li >Vaccine App</li>
            </ul>
            <p className='text-center text-5xl font-bold pt-4 max-sm:pt-4 max-sm:text-3xl' style={{color: '#393646', opacity: 0.9}} >Vaccine App</p>
            <br />
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
            <blockquote class="my-4 border-l-4 dark:border-gray-500">
                <p style={{color:"#333333"}} class="pl-4 text-2xl font-bold italic leading-relaxed max-sm:text-xl">Description</p>
            </blockquote>
            <p className='text-gray-600'>The results follow a design challenge from @plainthingstudio with the theme of a vaccine application</p>
            <blockquote class="my-4 border-l-4 dark:border-gray-500">
                <p style={{color:"#333333"}} class="pl-4 text-2xl font-bold italic leading-relaxed max-sm:text-xl">Tools</p>
            </blockquote>
            <ul className='max-w-md space-y-1 text-gray-600 list-disc list-inside dark:text-gray-600'>
                <li>Figma</li>
            </ul>
        </div>
        <Footer/>
        </div>
    );
}

export default Vaccine;