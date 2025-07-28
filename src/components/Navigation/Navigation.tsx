import { useEffect, useState } from 'react';

const Navigation = () => {
  // (move your hero section constants and logic here)
  const [activeNav, setActiveNav] = useState('hero');

  // Scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'projects', 'contact'];
      let found = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveNav(section);
            found = true;
            break;
          }
        }
      }

      // Optional fallback if none matched
      if (!found) setActiveNav('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className="navigation-bar">
        <ul className="navigation">
          <li className={`navigation__item ${activeNav === 'hero' ? 'navigation__item--active' : ''}`}>
            <a href="#hero">Home</a>
          </li>
          <li className={`navigation__item ${activeNav === 'about' ? 'navigation__item--active' : ''}`}>
            <a href="#about">About</a>
          </li>
          <li className={`navigation__item ${activeNav === 'work' ? 'navigation__item--active' : ''}`}>
            <a href="#work">Work</a>
          </li>
          <li className={`navigation__item ${activeNav === 'projects' ? 'navigation__item--active' : ''}`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`navigation__item ${activeNav === 'contact' ? 'navigation__item--active' : ''}`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;