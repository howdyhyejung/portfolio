import { Link } from 'react-router-dom';

const Projects = () => {
    return ( 
        <nav className="projects">
            <h1>Projects</h1>
            <div className="links">
                <Link to="/projects/positiveInfluences">선한영향력가게</Link>
                <Link to="/projects/artCalendar">아트 캘린더</Link>
                <Link to="/projects/personalBrand">개인 브랜드</Link>
            </div>
        </nav>
     );
}
 
export default Projects;