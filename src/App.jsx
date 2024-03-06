import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Complete from './pages/Home';
import Resume from './pages/Resume';
import NotFound from "./components/NotFound";
import Certificates from './components/certificates/Certificates';
import Projects from './components/projects/Projects';
import './globals/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Complete />} />
        <Route path="/resume" exact element={<Resume />} />
        <Route path="/certificates" exact element={<Certificates />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
