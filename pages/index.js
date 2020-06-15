import React, {useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import MainLayout from '../Layouts/main';
import Hero from '../components/Hero';
import {Timeline} from '../components/timeline';

export default function Home(){

    const web = 90;
    const mobile = 95;
    const desktop = 79;
    const DL = 60;

    const [isOpen, setIsOpen] = useState(false)

    return(
        <MainLayout toogle={!isOpen ? 'slide-out': 'slide-in'}>
            <Hero />
            <section id="about">
                <div id="about-content" className="container">
                    <header id="about-header">
                        <h4  className="headers">About Me</h4>
                        <div className="underline"></div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                            accusantium doloremque accusantium doloremque</p>
                    </header>
                    
                    <div className="row" id="skill">
                        <div className="col-md-6">
                            <h5 className="subheaders">Professional Skill</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                doloremque accusantium doloremque</p>
                            <div className="row">
                                <div className="col-sm-3">
                                    <CircularProgressbar
                                        className="skill web"
                                        value={web} 
                                        text={`${web}%`} 
                                    />
                                    <p>Web</p>
                                    
                                </div>
                                <div className="col-sm-3">
                                    <CircularProgressbar
                                        className="skill mobile" 
                                        value={mobile} 
                                        text={`${mobile}%`} 
                                    />
                                    <p>Mobile</p>
                                </div>
                                <div className="col-sm-3">
                                    <CircularProgressbar
                                        className="skill desktop"
                                        value={desktop} 
                                        text={`${desktop}%`} 
                                    />
                                    <p>Desktop</p>
                                </div>
                                <div className="col-sm-3">
                                    <CircularProgressbar
                                        className="skill dl"
                                        value={DL} 
                                        text={`${DL}%`} 
                                    />
                                    <p>Deep Learning</p>
                                </div>
                            </div>
                            <p id="my-story">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                                accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque accusantium doloremque accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque accusantium doloremque
                            </p>
                        </div>
                        <div className="col-md-6">
                            <Timeline />
                        </div>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}