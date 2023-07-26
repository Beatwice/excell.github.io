import React, { Component, Fragment } from 'react';
import Header from '../../components/header/Header';
import './Development.css'
import vaksin from "../../assets/img_carousel/vaksin.png";
import { Link } from "react-router-dom";
import Footer from '../../components/footer/footer';

const Development = () => {
    return(
        <div>
            <Header/>
            <div className='px-20 max-sm:px-0 max-sm:px-4 pt-16 max-sm:pt-10'>
                <br />
                <br />
                <p className='text-center text-5xl font-bold max-sm:text-3xl' style={{color: '#393646', opacity: 0.9}} >Projects</p>
                <br />
                <div style={{marginBottom:'5px'}}>
                    <Link style={{marginRight:'10px'}} className='bg-blue-500 rounded-full font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-sm:text-xs' to="/project/development">DEVELOPMENT</Link>
                    <Link className='bg-transparent rounded-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-sm:text-xs' to="/project/ui_design">UI DESIGN</Link>
                </div>
                <br />
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div class="rounded overflow-hidden shadow-lg">
                        <img className="w-full"src={vaksin} alt="vaksin"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-1">Vaccine Application</div>
                            <p class="text-gray-700 text-base">
                                Design Challenge by @plainthingstudio
                            </p>
                        </div>
                        <div className='flex justify-end px-6 pt-2 pb-4 right-0 bottom-0'>
                            <Link to="/project/ui_design/vaccine" className='text-black duration-300 hover:text-blue-700 font-semibold'>See Details</Link>
                        </div>
                    </div>
                    
                    {/* <div class="rounded overflow-hidden shadow-lg">
                        <img className="w-full"src={vaksin} alt="vaksin"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-1">Vaccine Application</div>
                            <p class="text-gray-700 text-base">
                                Design Challenge by @plainthingstudio
                            </p>
                        </div>
                        <div className='flex justify-end px-6 pt-2 pb-4 relative right-0 bottom-0'>
                            <Link to="/project/ui_design/vaccine" className='text-black duration-300 hover:text-blue-700 font-semibold'>See Details</Link>
                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg">
                        <img className="w-full"src={vaksin} alt="vaksin"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-1">Vaccine Application</div>
                            <p class="text-gray-700 text-base">
                                Design Challenge by @plainthingstudio Design Challenge by @plainthingstudio Design Challenge by @plainthingstudio
                            </p>
                        </div>
                        <div className='flex justify-end px-6 pt-2 pb-4'>
                            <Link to="/project/ui_design/vaccine" className='text-black duration-300 hover:text-blue-700 font-semibold'>See Details</Link>
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

export default Development;