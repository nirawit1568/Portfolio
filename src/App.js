import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbars'

//Contents
import Home from './content/Home'
import About from './content/About'
import Education from './content/Education'
import Skill from './content/Skill'
import Contact from './content/Contact'

import { BrowserRouter as Router,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/education">
          <Education/>
        </Route>
        <Route exact path="/skills">
          <Skill/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
