import "./App.css";
import { Routes, Route } from "react-router-dom";

import Hero from "/src/components/Hero/Hero.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Background from "./components/Background/Background.tsx";
import About from "./components/About/About.tsx";
import Work from "./components/Work/Work.tsx";
import Project from "./components/Project/Project.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import CS180Project0 from "./components/CS180/CS180Project0.tsx";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Background />
              <About />
              <Work />
              <Project />
              <Contact />
              <Footer />
              <CS180Project0 />
            </>
          }
        />

        <Route
          path="/cs180-project0"
          element={<CS180Project0 />}
        />
      </Routes>
    </div>
  );
};

export default App;
