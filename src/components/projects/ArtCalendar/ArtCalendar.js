import BackToTop from '../../BackToTop';

import TheChallenge from './theChallenge';
import TheProcess from './theProcess';
import TheSolution from './theSolution';
import TheFuture from './theFuture';

const ArtCalendar = () => {
    return (
        <>
        <div className="artCalendar">
            <h2>Art Calendar</h2>
            <ul>
                <li>
                    <a href="#topic1">The Challenge</a>	
                </li>
                <li>
                    <a href="#topic2">The Process</a>	
                </li>
                <li>
                    <a href="#topic3">The Solution</a>	
                </li>
                <li>
                    <a href="#topic4">The Future</a>	
                </li>
            </ul>

            <TheChallenge />
            <TheProcess />
            <TheSolution />
            <TheFuture />
        </div>
        <BackToTop />
        </>
     );
}
 
export default ArtCalendar;