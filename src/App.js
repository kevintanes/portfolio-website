import './App.css';
import Navbar from './Components/Navbar';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import 'flowbite';
import Skill from './Pages/Skill';

function App() {
  return <div>
    <Navbar />
    <div id='profile'>
      <Profile />
    </div>
    <div id='about'>
      <About />
    </div>
    <div id='skill'>
      <Skill />
    </div>
    <div id='portfolio'>
      <Portfolio />
    </div>
    <div id='contact'>
      <Contact />
    </div>
    <Footer />
  </div>;
}

export default App;
