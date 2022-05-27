import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';

import Navbar from './components/Navbar';
import About from './components/About';

import Projects from './components/projects/Projects';
import ArtCalendar from './components/projects/ArtCalendar/ArtCalendar';
import PersonalBrand from './components/projects/PersonalBrand/PersonalBrand';
import PosInfluences from './components/projects/PosInfluences/PosInfluences';

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
            <Route path="/projects/personalBrand" element={<PersonalBrand />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
