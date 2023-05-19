import React, { Component, Fragment } from 'react';
import Header from '../components/header/Header';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../components/footer/footer';
import './Experience.css'
class Experience extends Component 
{
    render ()
    {
        return (
            <>
            <Header/>
            <br />
            <br />
            <VerticalTimeline lineColor={ "#EAEAEA" }>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2023 - Now"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">PT. Transforme Indonesia</h3>
                    <h4 className="vertical-timeline-element-subtitle">(React JS, PHP, Github)</h4>
                    <p> Fullstack Developer </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - 2023"
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
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Freelance</h3>
                    <h4 className="vertical-timeline-element-subtitle">(Laravel, React JS)</h4>
                    <p> Fullstack Developer</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="October 2021"
                    contentStyle={{ background: '#F1F6F9', border:'red'}}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #F1F6F9' }}
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
            <br />
            <Footer/>
            </>
        );
    }
}

export default Experience;