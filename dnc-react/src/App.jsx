import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// PAGES & COMPONENTS
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// UTILS
import ScrollTop from './utils/ScrollTop';
import { AppContext } from './contexts/AppContext';

function App() {
  const appContext = useContext(AppContext)

  if (appContext.loading) {
    return <LoadingSpinner />
  }
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
