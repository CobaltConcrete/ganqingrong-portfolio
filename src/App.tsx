import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Qing Rong, a developer passionate about AI, Computer Vision, and Web Development.</p>
      </header>
      
      <section className="about">
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
        <p>
          I specialize in AI-driven solutions, full-stack development, and research in prompt engineering. 
          Check out my projects below!
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>EMotion</h3>
          <p>A dual-modality stress detection system using thermal and visual facial emotion recognition.</p>
        </div>
        <div className="project-card">
          <h3>AI Research at NTU</h3>
          <p>Exploring text-to-3D model generation and AI prompt engineering techniques.</p>
        </div>
      </section>

      <footer>
        <p>Connect with me on <a href="https://www.linkedin.com">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
