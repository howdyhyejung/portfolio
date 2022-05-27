import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return ( 
        <nav className="about">
            <h1>Howdy</h1>

            <a
                class='social-icon-link linkedIn'
                href="https://www.linkedin.com/in/hyejunglim/"
                target='_blank'
                rel="noreferrer"
                aria-label='LinkedIn'
            >
                <FontAwesomeIcon icon={ faLinkedin }></FontAwesomeIcon>
            </a>
        </nav>
     );
}
 
export default About;