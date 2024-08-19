import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.jpg"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Erick Tolentino</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href=""><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href=""><i><RiTwitterXLine size={20} /></i></a></li>
                                        <li><a href=""><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href=""><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Erick Tolentino, <span>Full Stack Developer</span> and Financial Analyst
                                    Based in New York.
                                </h2>
                                <div className="hero-btns">
                                    <a href="https://docs.google.com/document/d/1PJ0J-Vxk-EQvlIWrgbDRCSA6Q5GM8oq-1Qv3_XjxD0A/edit?usp=sharing" className="theme-btn">Download Resume <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                          
            
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About