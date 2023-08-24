import React, { Component, Fragment } from 'react';
import Header from '../components/header/Header';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../components/footer/footer';
import './Experience.css'


const Experience = () => {
    return (
        <div style={{background:"white"}}>
            <Header/>
            <br />
            <br />
            <p className='text-center text-5xl font-bold pt-16 max-sm:pt-10 max-sm:text-3xl' style={{color: '#393646', opacity: 0.9}} >My Experience</p>
            <br />
            <div className='max-sm:px-4'>
                <VerticalTimeline lineColor={ "#EAEAEA" } className='text-white'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#19376D', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #19376D' }}
                        iconStyle={{ background: '#19376D', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">PT. Transforme Indonesia</h3>
                        <h4 className="vertical-timeline-element-subtitle">(React JS, PHP, Github)</h4>
                        <p> Fullstack Developer </p>
                        <span className='max-sm:text-sm'>2023 - Now</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#19376D', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #19376D' }}
                        iconStyle={{ background: '#19376D', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">PT. Nutrifood Indonesia - Internship</h3>
                        <h4 className="vertical-timeline-element-subtitle">(Ruby, Ruby on Rails, Git, Docker, CI/CD, Ubuntu)</h4>
                        <p> Application Developer </p>
                        <span className='max-sm:text-sm'>2022 - 2023</span>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#19376D', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #19376D' }}
                        iconStyle={{ background: '#19376D', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">Freelance</h3>
                        <h4 className="vertical-timeline-element-subtitle"></h4>
                        <p> Fullstack Developer</p>
                        <span className='max-sm:text-sm'>2022 - Now</span>
                    </VerticalTimelineElement> */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#84142D', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #84142D' }}
                        iconStyle={{ background: '#84142D', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">Mahir Membuat Website Dengan Laravel</h3>
                        <h4 className="vertical-timeline-element-subtitle">(Laravel, PHP, Boostrap)</h4>
                        <p> Online Course - Coding Studio </p>
                        <span className='max-sm:text-sm'>October 2021</span>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2019 - 2023"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle"></h4>
                        <p> Creative Direction, Visual Design</p>
                    </VerticalTimelineElement> */}
                </VerticalTimeline>
            </div>
            <Footer/>
        </div>
    );
}

export default Experience;