import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";



const Footer = () => {
    const socialIcon = [faFacebook,faEnvelope, faLinkedin, faTwitter ]
    return (
        <footer>
            <div className="social-links">
                <ul>
                    {
                        socialIcon.length > 0 &&
                        socialIcon.map(item => <li><Link to="/"><FontAwesomeIcon icon={item}/></Link></li>)
                    }
                </ul>
            </div>
            <p className="copyright">copyright &copy; </p>
        </footer>
    )
}

export default Footer