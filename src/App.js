import './App.css';
import Layout from './Layout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import Stack from './Components/Stack/Stack';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  );
}

export default App;
