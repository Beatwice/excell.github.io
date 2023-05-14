import React, { Component, Fragment } from 'react';
import Typewriter from "typewriter-effect";
import Header from '../components/header/Header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Iskill from "../assets/img_carousel/Iskill.png";

class Home extends Component 
{
    render ()
    {
        return (
            <>
            <Header/>
            <div className='container mx-auto px-4'>
                <div className='pt-80' style={{height:'90vh'}}>
                    <div className='text-center'>
                        {/* <div className='text-center'>
                            <img src={Icon} alt="icon" className='text-center' style={{width:'200px', display:'inline' }} />
                        </div> */}
                        <br />
                        <h1 className="text-5xl font-bold">
                            Hi, Im Excell
                        </h1>
                        <div className="text-2xl">
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

                <div>
                    <div className='text-center'>
                        <div className='text-3xl font-semibold'>
                            My Experience
                        </div>
                        <br />
                        <br />
                        <Carousel>
                            <div>
                                <img src={Iskill} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src="assets/2.jpeg" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="assets/3.jpeg" />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img src="assets/4.jpeg" />
                                <p className="legend">Legend 4</p>
                            </div>
                            <div>
                                <img src="assets/5.jpeg" />
                                <p className="legend">Legend 5</p>
                            </div>
                            <div>
                                <img src="assets/6.jpeg" />
                                <p className="legend">Legend 6</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Home;