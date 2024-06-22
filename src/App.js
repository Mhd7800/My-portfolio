import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import Stack from './Components/Stack/Stack';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Projects/>
      <About/>
      <Stack/>
      <Contact/>
    </div>
  );
}

export default App;
