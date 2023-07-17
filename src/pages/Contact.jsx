import React, { useRef } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = () => {

    };

    return (
        <div>
            <Header/>
            <div className='container mx-auto px-24'>
                <br />
                <br />
                <p className='text-center text-5xl font-bold' style={{color: '#393646', opacity: 0.9}} >Contact</p>
                <br />
                <br />
                <div className="container px-5 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form ref={form} onSubmit={sendEmail} action="">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="email"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="subject"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                <label
                                    for="message"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    required
                                ></textarea>
                                </div>
                            </div>
                            <br />
                            <div className='p-2 text-center'>
                                <button type='submit' id="btn-send" className="w-full mx-auto  text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Contact;