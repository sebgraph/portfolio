import "./CV.scss";
import Profile from "../../img/profile-icon.svg";
import Experience from "../../img/experience-icon.svg";
import Education from "../../img/education-icon.svg";
import Languages from "../../img/languages-icon.svg";
import Hobbies from "../../img/hobbies-icon.svg";
import Soccer from "../../img/soccer.svg";
import Ride from "../../img/ride-bike.svg";
import Paint from "../../img/paint.svg";
import Cook from "../../img/cook.svg";
import Cv from "../../documents/cv-sebastian-gonzalez.pdf";
import Skills from "../../img/skills-icon.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";

const CV = () => {
    useEffect(() => {
        Aos.init({duration: 1000});

    },[]);


    return(
        <main className="container-cv mt-40">
        <section className="name-cv">
            <article className="name-cv__text-box">
            <h1 data-aos="fade-up" data-aos-delay="500" className="heading-primary">Sebastian González</h1>
            <span data-aos="fade-up" data-aos-delay="900" className="heading-tertiary">UI Designer.</span>
            </article>
            

        </section>

        <section data-aos="fade-up" data-aos-delay="1000"  className="profile-cv">
            <img className="icon" src={Profile} alt="profile"/>
            <article className="profile-cv__text-box">
                <h2 className="heading-secondary subtitle">Profile</h2>
                <p className="paragraph">Hi!!, I am an UI designer who believe in digital products that connect the design focused in people experiences.
                    I will help you to connect the users with your digital products through great interfaces and experiences.</p>
            </article>

        </section>

        <section data-aos="fade-up" className="experience-cv">
            <img className="icon" src={Experience} alt="experience"/>
            <article className="experience-cv__text-box">
                <h2 className="heading-secondary subtitle">Experience</h2>
                <div className="experience-cv__experience-container">
                    <div className="experience-cv__head-container">
                        <h3 className="heading-tertiary">UI Designer</h3>
                        <span className="body-large">Cheil World Wide / Bogotá / 2019 - currently</span>
                    </div>
                    <ol>
                        <ul className="experience-cv__items paragraph">
                            <li className="experience-cv__item">Develop of interface design for websites and apps on new functionalities within iterative processes for huge brands like Samsung.</li>
                            <li className="experience-cv__item">Wireframes and prototype development for different products.</li>
                            <li className="experience-cv__item">Develop, managing and maintaining of design systems. </li>
                            <li className="experience-cv__item">Communication and understanding of UX process and teams transforming different research results in visual interfaces.</li>
                            <li className="experience-cv__item">Communication with development team to create consistent components.</li>
                        </ul>
                    </ol>
                </div>

                <div className="experience-cv__experience-container">
                    <div className="experience-cv__head-container">
                        <h3 className="heading-tertiary">Graphic and web designer</h3>
                        <span className="body-large">Solutions Group / Bogotá / 2015 - 2019</span>
                    </div>
                    <ol>
                        <ul className="experience-cv__items paragraph">
                            <li className="experience-cv__item">Conceptualization, design, and coding for a new
                                e-commerce platform for the innovation lab of the company called ProtoLab, using UX research methodologies and interface design.</li>
                            <li className="experience-cv__item">Communication and understanding of UX process with different research methods like emphaty maps, user journeys and interviews.</li>
                            <li className="experience-cv__item">Develop of digital products focused in websites design and social media content. </li>
                            <li className="experience-cv__item">Participation in digital campaigns and global brand activations of projects with global brands like Coca-Cola and Av-inbev.</li>
                           
                        </ul>
                    </ol>
                </div>

            </article>

        </section>

        <section data-aos="fade-up" className="education-cv">
            <img className="icon" src={Education} alt="education"/>
            <article className="education-cv__text-box">
                <h2 className="heading-secondary subtitle">Education</h2>
                <div className="education-cv__course">
                    <h3 className="heading-tertiary education-cv__course-name">Course of design and marketing of websites.</h3>
                    <p className="body-large education-cv__university">Universidad Jorge Tadeo Lozano.</p>
                    <p className="paragraph">2019.</p>
                    <hr/>
                </div>
                <div className="education-cv__course">
                    <h3 className="heading-tertiary education-cv__course-name">Course of branding.</h3>
                    <p className="body-large education-cv__university">Universidad Jorge Tadeo Lozano.</p>
                    <p className="paragraph">2018.</p>
                    <hr/>
                </div>
                <div className="education-cv__course">
                    <h3 className="heading-tertiary education-cv__course-name">Graphic design degree.</h3>
                    <p className="body-large education-cv__university">Universidad Los Libertadores.</p>
                    <p className="paragraph">2010/2014.</p>
                    <hr/>
                </div>

            </article>

        </section>

        <section data-aos="fade-up" className="skills-cv">
            <img className="icon" src={Skills} alt=""/>
            <article className="skills-cv__skills-container">
                <h2 className="heading-secondary subtitle">Skills</h2>
                <div className="skills-cv__skill">
                    <h3 className="heading-tertiary skills-cv__field">Professional</h3>
                    <div className="skills-cv__item">
                        <p className="body-large">Time management</p>
                        <div className="skills-cv__bar-container">
                            <progress className="skills-cv__bar" value="90" max="100"></progress>
                            <p className="skills-cv__percent paragraph">90%</p>
                        </div>
                    </div>
                    <div className="skills-cv__item">
                        <p className="body-large">Teamwork</p>
                        <div className="skills-cv__bar-container">
                            <progress className="skills-cv__bar" value="85" max="100"></progress>
                            <p className="skills-cv__percent paragraph">85%</p>
                        </div>
                    </div>
                    <div className="skills-cv__item">
                        <p className="body-large">Flexibility</p>
                        <div className="skills-cv__bar-container">
                            <progress className="skills-cv__bar" value="75" max="100"></progress>
                            <p className="skills-cv__percent paragraph">75%</p>
                        </div>
                    </div>
                    <div className="skills-cv__item">
                        <p className="body-large">Communication</p>
                        <div className="skills-cv__bar-container">
                            <progress className="skills-cv__bar" value="70" max="100"></progress>
                            <p className="skills-cv__percent paragraph">70%</p>
                        </div>
                    </div>


                </div>

                <div className="skills-cv__skill">
                    <h3 className="heading-tertiary skills-cv__field">Technical</h3>
                    <div className="skills-cv__item">
                        <p className="body-large">Prototyping figma XD</p>
                        <div className="skills-cv__bar-container">
                            <progress className="skills-cv__bar" value="90" max="100"></progress>
                            <p className="skills-cv__percent paragraph">90%</p>
                        </div>
                    </div>
                    <div className="skills-cv__item">
                        <p className="body-large">HTML / CSS - SASS</p>
                        <div className="skills-cv__bar-container">
                            <progress className="skills-cv__bar" value="85" max="100"></progress>
                            <p className="skills-cv__percent paragraph">85%</p>
                        </div>
                    </div>
                    <div className="skills-cv__item">
                        <p className="body-large">JavaScript</p>
                        <div className="skills-cv__bar-container">
                            <progress className="skills-cv__bar" value="30" max="100"></progress>
                            <p className="skills-cv__percent paragraph">30%</p>
                        </div>
                    </div>
                    <div className="skills-cv__item">
                        <p className="body-large">Visual Design</p>
                        <div className="skills-cv__bar-container">
                            <progress className="skills-cv__bar" value="85" max="100"></progress>
                            <p className="skills-cv__percent paragraph">85%</p>
                        </div>
                    </div>


                </div>

            </article>

        </section>

        <section data-aos="fade-up" className="languages-cv">
            <img className="icon" src={Languages} alt="language"/>
            <article className="languages-cv__text-box">
                <h2 className="heading-secondary subtitle">Languages</h2>
                <div className="languages-cv__item">
                    <p className="body-large languages-cv__language">English</p>
                    <div className="languages-cv__bar-container">
                        <progress className="languages-cv__bar" value="75" max="100"></progress>
                        <p className="languages-cv__percent paragraph">B2</p>
                    </div>
                </div>
                <div className="languages-cv__item">
                    <p className="body-large languages-cv__language">Portuguese</p>
                    <div className="languages-cv__bar-container">
                        <progress className="languages-cv__bar" value="75" max="100"></progress>
                        <p className="languages-cv__percent paragraph">B2</p>
                    </div>
                </div>
                <div className="languages-cv__item">
                    <p className="body-large languages-cv__language">Spanish</p>
                    <div className="languages-cv__bar-container">
                        <progress className="languages-cv__bar" value="100" max="100"></progress>
                        <p className="languages-cv__percent paragraph">Native</p>
                    </div>
                </div>

            </article>

        </section>

        <section data-aos="fade-up" className="hobbies-cv">
            <img className="icon" src={Hobbies} alt="hobbies"/>
            <div className="hobbies-cv__text-box">
                <h2 className="heading-secondary subtitle">Hobbies</h2>
                <div className="hobbies-cv__icons">
                    <img className="hobbies-cv__icon" src={Soccer} alt=""/>
                    <img className="hobbies-cv__icon" src={Ride} alt=""/>
                    <img className="hobbies-cv__icon" src={Paint} alt=""/>
                    <img className="hobbies-cv__icon" src={Cook} alt=""/>
                </div>

            </div>

        </section>

        <section data-aos="fade-up" className="download-cv">
            <h2 className="heading-secondary subtitle">Let’s talk</h2>
            <div className="download-cv__btns">

                 <a href={Cv} rel="noreferrer" className="viewPdf btn btn--secondary btn--animated" target="_blank">
                    View PDF online
                </a>

                <a href={Cv} rel="noreferrer" download="" className="download btn btn--primary btn--animated">       
                    Download PDF           
                </a>
            </div>


        </section>
        

    </main>
    );
};

export default CV;