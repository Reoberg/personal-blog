
import cvData from "../CV.json"
import portfolioData from "../Portfolio.json"
import React, {useRef } from 'react';
import Header from '../components/Header';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";




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
            <p> Passionate Software Developer with a double major in Mechanical and Computer Engineering and 2+
                years of hands-on development experience. Recently completed a Master’s in Advanced Computing, with
                a focus on multi-cloud Kubernetes deployment. Skilled in full-stack development (Vue.js, React, Node.js),
                cloud computing (Azure, GCP, Kubernetes), and game development (Unity, C#). Proven ability to optimize
                performance, develop scalable applications, and collaborate with cross-functional teams to deliver high-
                quality software.
            </p>
          </div>
          <span class="line"></span>
          <div className="connection-links">
                    <h4>Connect With Me</h4>
                    <div className="social-links">
                        <a href="https://github.com/Reoberg" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/onuroziskender" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="mailto:onuroziskender@outlook.com">
                            <FaEnvelope /> Email
                        </a>
                    </div>
                </div>
         

        </section>
        <section className="myWorksSection" ref={sectionRefs.works}>
          <h2> Portfolio </h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card" onClick={() => window.location.href = project.link}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-info">{project.info}</p>
              </div>
            ))}
          </div>
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
              href="https://www.dropbox.com/scl/fi/eopcmihqze6merlhu72r7/Onur-Oziskender-CV.pdf?rlkey=75jivyiw9npay48u4sbzrnngx&st=r1vgddrn&dl=0" 
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