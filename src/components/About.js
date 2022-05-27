import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return ( 
        <nav className="about">
            <h1>Howdy</h1>

        <ul>
            <li>
                <a
                    class='social-icon-link linkedIn'
                    href="https://www.linkedin.com/in/hyejunglim/"
                    target='_blank'
                    rel="noreferrer"
                    aria-label='LinkedIn'
                >
                    <FontAwesomeIcon icon={ faLinkedin }></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a
                    class='social-icon-link instagram'
                    href="https://www.linkedin.com/in/hyejunglim/"
                    target='_blank'
                    rel="noreferrer"
                    aria-label='Instagram'
                >
                    <FontAwesomeIcon icon={ faInstagram }></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a
                    class='social-icon-link github'
                    href="https://www.linkedin.com/in/hyejunglim/"
                    target='_blank'
                    rel="noreferrer"
                    aria-label='GitHub'
                >
                    <FontAwesomeIcon icon={ faGithub }></FontAwesomeIcon>
                </a>
            </li>
        </ul>

        </nav>
     );
}
 
export default About;