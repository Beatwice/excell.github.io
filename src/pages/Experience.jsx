import React, { Component, Fragment } from 'react';
import Header from '../components/header/Header';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../components/footer/footer';
import './Experience.css'


const Experience = () => {
    return (
        <div>
            <Header/>
            <br />
            <br />
            <p className='text-center text-5xl font-bold' style={{color: '#393646', opacity: 0.9}} >My Experience</p>
            <br />
            <VerticalTimeline lineColor={ "#EAEAEA" }>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date = "2023 - Now"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#393646' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">PT. Transforme Indonesia</h3>
                    <h4 className="vertical-timeline-element-subtitle">(React JS, PHP, Github)</h4>
                    <p> Fullstack Developer </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - 2023"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">PT. Nutrifood Indonesia - Internship</h3>
                    <h4 className="vertical-timeline-element-subtitle">(Ruby, Ruby on Rails, Git, Docker, CI/CD, Ubuntu)</h4>
                    <p> Application Developer </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - now"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Freelance</h3>
                    <h4 className="vertical-timeline-element-subtitle">(Laravel)</h4>
                    <p> Fullstack Developer</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="October 2021"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Mahir Membuat Website Dengan Laravel</h3>
                    <h4 className="vertical-timeline-element-subtitle">(Laravel, PHP, Boostrap)</h4>
                    <p> Online Course - Coding Studio </p>
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
            <Footer/>
            <br />
        </div>
    );
}

export default Experience;