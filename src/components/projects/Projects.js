import { Link } from 'react-router-dom';

const Projects = () => {
    return ( 
        <nav className="projects">
            <h1>Projects</h1>
            <div className="links">
                <Link to="/projects/positiveInfluences">Positive Influences</Link>
                <Link to="/projects/artCalendar">Art Calendar</Link>
            </div>
        </nav>
     );
}
 
export default Projects;