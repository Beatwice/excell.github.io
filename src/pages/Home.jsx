import React, { Component, Fragment } from 'react';
import Typewriter from "typewriter-effect";
import Header from '../components/header/Header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Iskill from "../assets/img_carousel/Iskill.png";
import Easybengkel from "../assets/img_carousel/easybengkel.png";
import Vaksin from "../assets/img_carousel/vaksin.png";
import Makro from "../assets/img_carousel/makro.png";
import Footer from '../components/footer/footer';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Header/>
            <div className='container mx-auto px-24 max-sm:px-0 pt-16'>
                <div className='body pt-72 max-sm:pt-80' style={{height:'90vh'}}>
                    <div className='text-center'>
                        <h1 className="text-5xl max-sm:text-3xl font-bold">
                            Hi, Im Excell
                        </h1>
                        <div className="text-2xl max-sm:text-1xl">
                            <Typewriter
                            options={{
                                strings:"I'm Fullstack Developer and UI Designer",
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div className='text-center'>
                        <div className='text-3xl font-semibold'>
                            My Experience
                        </div>
                        <br />
                        <br />
                        <div className='flex justify-center'>
                        <Carousel autoPlay={true} infiniteLoop={true} className='carousel-container' showArrows={false}>
                            <div>
                                <img src={Makro} />
                            </div>
                            <div>
                                <img src={Easybengkel} />
                            </div>
                            <div>
                                <img src={Iskill} />
                            </div>
                            <div>
                                <img src={Vaksin} />
                            </div>
                        </Carousel>
                        </div>
                    </div>
                </div> */}
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Home;