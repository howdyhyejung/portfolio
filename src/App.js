import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import ArtCalendar from './projects/ArtCalendar';
import PosInfluences from './projects/PosInfluences';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/artCalendar" element={<ArtCalendar />} />
            <Route path="/projects/positiveInfluences" element={<PosInfluences />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
