import React, { Component, Fragment } from 'react';
import Header from '../../components/header/Header';
import './Development.css'
import vaksin from "../../assets/img_carousel/vaksin.png";
import { Link } from "react-router-dom";
import Footer from '../../components/footer/footer';

const UiDesign = () => {
    return(
        <div>
            <Header/>
            <div className='container mx-auto px-24 '>
                <br />
                <br />
                <p className='text-center text-5xl font-bold' style={{color: '#393646', opacity: 0.9}} >Projects</p>
                <br />
                <div style={{marginBottom:'5px'}}>
                    <Link style={{marginRight:'10px'}} className='bg-transparent rounded-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' to="/project/development">DEVELOPMENT</Link>
                    <Link className='bg-blue-500 rounded-full font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' to="/project/ui_design">UI DESIGN</Link>
                </div>
                <br />
                <div className='flex' style={{gap:'40px'}}> 
                    <div style={{backgroundColor: '#F1F6F9', width:'420px', borderRadius:'10px'}} className='round card'>
                        <div style={{padding:'20px'}}>
                            <div>
                                <img src={vaksin} alt="vaksin" style={{width:'400px', borderRadius:'10px' }} />
                            </div>
                            <div style={{height:'100px'}}>
                                <strong><p style={{fontSize:'18px'}}>Vaccine Application</p></strong>
                                <p>Design Challenge by @plainthingstudio</p>
                            </div>
                            <div className='flex justify-end'>
                                    <Link to="/project/ui_design/vaccine" className='text-black duration-300 hover:text-blue-700 font-semibold'>See Details</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div style={{backgroundColor: '#F1F6F9', width:'420px', borderRadius:'10px' }} className='round card'>
                        <div style={{padding:'20px'}}>
                            <div>
                                <img src={vaksin} alt="vaksin" style={{width:'400px', borderRadius:'10px' }} />
                            </div>
                            <div style={{height:'100px'}}>
                                <strong><p style={{fontSize:'18px'}}>Vaccine Application</p></strong>
                                <p>Design Challenge by @plainthingstudio</p>
                            </div>
                            <div className='flex justify-end'>
                                Details
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor: '#F1F6F9', width:'420px', borderRadius:'10px' }} className='round card'>
                        <div style={{padding:'20px'}}>
                            <div>
                                <img src={vaksin} alt="vaksin" style={{width:'400px', borderRadius:'10px' }} />
                            </div>
                            <div style={{height:'100px'}}>
                                <strong><p style={{fontSize:'18px'}}>Vaccine Application</p></strong>
                                <p>Design Challenge by @plainthingstudio</p>
                            </div>
                            <div className='flex justify-end'>
                                Details
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default UiDesign;