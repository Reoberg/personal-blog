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

                <div className="footer-center">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h4>Connect With Me</h4>
                    <div className="social-links">
                        <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> Instagram
                        </a>
                        <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="mailto:your.email@example.com">
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