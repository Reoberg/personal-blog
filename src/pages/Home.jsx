
import cvData from "../CV.json"
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';



function Home (){

  const sectionRefs = {
    hello: useRef(null),
    works: useRef(null),
    cv: useRef(null)
  };

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

    return(
      <React.Fragment>

      <Header scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      <div className="home">
        <section className="helloSection" ref={sectionRefs.hello}>
          <div className="helloContainer">
            <h2>Hey! I am Onur</h2>
            <p> I am Software Developer, hold a double major in Mechanical Engineering
              and Computer Engineering. With 1.5 years of experience as a game 
              developer, I am passionate about creating high-quality games and 
              continuously improving my coding skills to meet the highest 
              industry standards. I was recently focused on Cloud Technologies
              and Kubernetes.Have recently completed a master’s degree in Advanced 
              Computing with adissertation project about Multi-cloud Deployer in Kubernetes.</p>
          </div>
         

        </section>
        <section className="myWorksSection" ref={sectionRefs.works}>
                  <h2> Experiences </h2>
                  
        </section>
        <section className="cvSection" ref={sectionRefs.cv}>

          <h2 className="cv-title">Professional CV</h2>
          
          <div className="cv-content">
            {/* Work Experience */}
            <div className="cv-work-experience">
              <h3 className="cv-subtitle">Work Experience</h3>
              {cvData.workExperience.map((job, index) => (
                <div key={index} className="cv-job">
                  <h4 className="cv-job-title">{job.position}</h4>
                  <p className="cv-job-details">{job.company} | {job.duration}</p>
                  <ul className="cv-job-responsibilities">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education & Skills */}
            <div className="cv-sidebar">
              <div className="cv-education">
                <h3 className="cv-subtitle">Education</h3>
                {cvData.education.map((uni, index) => (
                  <div key={index} className="cv-education-details">
                    <h4 className="cv-education-degree">{uni.degree}</h4>
                    <p className="cv-education-institution">
                      {uni.institution} | Graduated {uni.graduationYear}
                    </p>
                  </div>
                ))}
              </div>

              <div className="cv-skills">
                <h3 className="cv-subtitle">Skills</h3>
                <div className="cv-skills-list">
                  {cvData.skills.map((skill, index) => (
                    <span key={index} className="cv-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PDF Download Option */}
          <div className="cv-download">
            <a 
              href="/path/to/your/resume.pdf" 
              download 
              className="cv-download-button"
            >
              Download Full CV
            </a>
          </div>


        </section>
     
      </div>

      </React.Fragment>
    )
}
export default Home;