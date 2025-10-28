import "./App.css";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Background from "./components/Background/Background";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CS180Project0 from "./components/CS180/CS180Project0";

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
              {/* <CS180Project0 /> */}
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
