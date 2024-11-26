import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa6";

function Footer(){
    return(
        <footer className="footer">
        <div className="footerContainer">
            <div className="footer-content">
                <div className="footer-left">
                    <h3>Onur</h3>
                    <p>Software Developer | Cloud Technologies Enthusiast</p>
                </div>

                <div className="footer-right">
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
            </div>

            <div className="footer-bottom">
                <p>2024 Onur. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;