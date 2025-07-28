import './App.css';
import Hero from './components/Hero/Hero.tsx';
import Navigation from './components/Navigation/Navigation.tsx';
import Background from './components/Background/Background.tsx';
import About from './components/About/About.tsx';
import Work from './components/Work/Work.tsx';
import Project from './components/Project/Project.tsx';
import Contact from './components/Contact/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';


const App: React.FC = () => {


  return (
    
    <div className="App">
      <Hero />
      <Navigation />
      <Background />
      <About />
      <Work />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;