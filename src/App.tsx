import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import postgresIcon from './assets/icons/postgresql_color.svg';
import reactIcon from './assets/icons/react_color.svg';
import yoloIcon from './assets/icons/yolo_color.svg';
import blenderIcon from './assets/icons/blender.svg';
import openaiIcon from './assets/icons/openai.svg';
import pythonIcon from './assets/icons/python_color.svg';
import ttsIcon from './assets/icons/tts.webp';
import prusaIcon from './assets/icons/prusa.svg';
import stablediffusionIcon from './assets/icons/stablediffusion.png'; 
import databaseIcon from './assets/icons/database.svg';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas2Ref = useRef<HTMLCanvasElement>(null);
  const [activeNav, setActiveNav] = useState('hero');

// useEffect(() => {
//   const canvas = canvasRef.current;
//   if (!canvas) return;

//   const ctx = canvas.getContext('2d');
//   if (!ctx) return;

//   const mouse = { x: 0, y: 0 };
//   const dots: { x: number; y: number; vx: number; vy: number }[] = [];
//   const dotsPer10000Px = 1; // dot density per area

//   const generateDots = () => {
//     const area = canvas.width * canvas.height;
//     const numDots = Math.floor((area / 10000) * dotsPer10000Px);
//     dots.length = 0; // clear existing
//     for (let i = 0; i < numDots; i++) {
//       dots.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//       });
//     }
//   };

//   const resizeCanvas = () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     generateDots(); // repopulate on resize
//   };

//   resizeCanvas();

//   const handleMouseMove = (e: MouseEvent) => {
//     mouse.x = e.clientX;
//     mouse.y = e.clientY;
//   };

//   window.addEventListener('mousemove', handleMouseMove);

//   let animationId: number;

//   const animate = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     dots.forEach((dot, i) => {
//       dot.x += dot.vx;
//       dot.y += dot.vy;

//       if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
//       if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

//       ctx.beginPath();
//       ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
//       ctx.fillStyle = 'rgba(81, 162, 233, 0.6)';
//       ctx.fill();

//       for (let j = i + 1; j < dots.length; j++) {
//         const dx = dots[j].x - dot.x;
//         const dy = dots[j].y - dot.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 100) {
//           ctx.beginPath();
//           ctx.moveTo(dot.x, dot.y);
//           ctx.lineTo(dots[j].x, dots[j].y);
//           ctx.strokeStyle = `rgba(81, 162, 233, ${0.3 * (1 - distance / 100)})`;
//           ctx.stroke();
//         }
//       }

//       const mx = mouse.x - dot.x;
//       const my = mouse.y - dot.y;
//       const mouseDist = Math.sqrt(mx * mx + my * my);

//       if (mouseDist < 50) {
//         ctx.beginPath();
//         ctx.moveTo(dot.x, dot.y);
//         ctx.lineTo(mouse.x, mouse.y);
//         ctx.strokeStyle = `rgba(81, 162, 233, ${0.6 * (1 - mouseDist / 100)})`;
//         ctx.stroke();

//         // subtle attraction
//         dot.vx += mx * 0.0002;
//         dot.vy += my * 0.0002;
//       }
//     });

//     animationId = requestAnimationFrame(animate);
//   };

//   animate();
//   window.addEventListener('resize', resizeCanvas);

//   return () => {
//     window.removeEventListener('resize', resizeCanvas);
//     window.removeEventListener('mousemove', handleMouseMove);
//     cancelAnimationFrame(animationId);
//   };
// }, []);

useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const mouse = { x: -1000, y: -1000 }; // initial off-screen
  let isInsideHero = false;

  const dots: { x: number; y: number; vx: number; vy: number; color: 'white' | 'blue' }[] = [];
  const dotsPer10000Px = 1;

  const generateDots = () => {
    const area = canvas.width * canvas.height;
    const numDots = Math.floor((area / 10000) * dotsPer10000Px);
    dots.length = 0;
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: Math.random() < 0.5 ? 'white' : 'blue',
      });
    }
  };

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateDots();
  };

  resizeCanvas();

  const hero = document.getElementById('hero');
  if (!hero) return;

  const updateMousePosition = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    isInsideHero = true;
  };

  const handleMouseLeave = () => {
    isInsideHero = false;
  };

  hero.addEventListener('pointermove', updateMousePosition);
  hero.addEventListener('pointerleave', handleMouseLeave);
  window.addEventListener('resize', resizeCanvas);

  let animationId: number;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const NodesConnected: typeof dots = [];
    const maxMouseDist = 400;
    const maxDotDist = 200;

    dots.forEach((dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = dot.color === 'white' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(81, 162, 233, 0.6)';
      ctx.fill();

      if (isInsideHero) {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < maxMouseDist) {
          const t = 1 - distToMouse / maxMouseDist;

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(dot.x, dot.y);
          ctx.strokeStyle = `rgba(81, 162, 233, ${0.8 * t})`;
          ctx.lineWidth = 2 * t + 0.5;
          ctx.stroke();

          NodesConnected.push(dot);
        }
      }
    });

    for (let i = 0; i < NodesConnected.length; i++) {
      const a = NodesConnected[i];
      for (let j = i + 1; j < NodesConnected.length; j++) {
        const b = NodesConnected[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distBetween = Math.sqrt(dx * dx + dy * dy);

        if (distBetween < maxDotDist) {
          const d1 = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          const d2 = Math.hypot(b.x - mouse.x, b.y - mouse.y);
          const avgDistToMouse = (d1 + d2) / 2;
          const t = 1 - Math.min(avgDistToMouse, maxMouseDist) / maxMouseDist;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(81, 162, 233, ${0.4 * t})`;
          ctx.lineWidth = 1.5 * t + 0.2;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(animate);
  };

  animate();

  return () => {
    hero.removeEventListener('pointermove', updateMousePosition);
    hero.removeEventListener('pointerleave', handleMouseLeave);
    window.removeEventListener('resize', resizeCanvas);
    cancelAnimationFrame(animationId);
  };
}, []);


  // Alternating roles
const roles = ["Machine Learning Engineer", "Software Engineer", "Gamer"];
const [roleIndex, setRoleIndex] = useState(0);
const [displayText, setDisplayText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentRole = roles[roleIndex];
  const typingSpeed = isDeleting ? 50 : 100; // faster when deleting
  const pauseTime = 1000;

  let timeoutId: NodeJS.Timeout;

  if (!isDeleting && displayText === currentRole) {
    // Pause at full word
    timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
  } else if (isDeleting && displayText === "") {
    // Move to next word after erasing
    setIsDeleting(false);
    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
  } else {
    // Typing or deleting
    const updatedText = isDeleting
      ? currentRole.slice(0, displayText.length - 1)
      : currentRole.slice(0, displayText.length + 1);

    timeoutId = setTimeout(() => setDisplayText(updatedText), typingSpeed);
  }

  return () => clearTimeout(timeoutId);
}, [displayText, isDeleting, roleIndex]);




  // Scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get('name') as string;
    const email = formData.get('_replyto') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Submit to Formspree (or handle as needed)
    form.submit();
  };

  const ProfileIcon = () => (
    <svg version="1.1" viewBox="0 0 482.9 482.9" height="100%" stroke="rgb(26, 26, 26)" strokeWidth="16">
      <defs>
        <linearGradient id="gradient-1" x1="0" y1="0" x2="80%" y2="80%">
          <stop stopColor="rgb(81,162,233)" offset="0%" />
          <stop stopColor="rgb(168,120,162)" offset="100%" />
        </linearGradient>
        <linearGradient id="gradient-2" x1="20%" y1="20%" x2="100%" y2="100%">
          <stop stopColor="rgb(168,120,162)" offset="0%" />
          <stop stopColor="rgb(255,77,90)" offset="100%" />
        </linearGradient>
      </defs>
      <g>
        <path fill="url(#gradient-1)" d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z" />
        <path fill="url(#gradient-2)" d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z" />
      </g>
    </svg>
  );

  const ArrowIcon = () => (
    <svg className="heading__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
    </svg>
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Number of carousel items — update if you add/remove items
  const itemsCount = 3;

  // Scroll to specific slide
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const itemWidth = carousel.offsetWidth;
    carousel.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
  };

  // Update active pill on scroll
  const onScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.addEventListener('scroll', onScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', onScroll);
  }, [activeIndex]);

const handleWorkArrowScroll = (dir: number) => {
  if (!carouselRef.current) return;
  const carousel = carouselRef.current;
  const itemWidth = carousel.offsetWidth;
  let newIndex = activeIndex + dir;
  if (newIndex < 0) newIndex = 0;
  if (newIndex >= itemsCount) newIndex = itemsCount - 1;
  scrollToIndex(newIndex);
};

  return (
    <div className="App">
      {/* Hero Section */}
      <div className="hero" id="hero">
        <div className="canvas">
          <canvas ref={canvasRef} className="connecting-dots" />
        </div>
        <div className="heading">
          <div className="heading__line-1">Hello, I'm <span>Qing Rong</span>.</div>
          <div className="heading__line-2">
            I am a <span className="typing-text">{displayText}</span>_
          </div>
          <a href="#about" className="heading__link">
            <div className="heading-cta">
              View my work <ArrowIcon />
            </div>
          </a>
        </div>
      </div>

      {/* Navigation */}
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

      {/* Background */}
      <div className="main-bg">
        <div className="canvas">
          <canvas ref={canvas2Ref} className="canvas-2" />
        </div>
      </div>

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="about__heading section-heading">About</h2>
        <div className="about__content">
          <div className="profile profile__fade-in">
            <div className="profile__picture">
              <ProfileIcon />
            </div>
            <p className="profile__blurb">
              Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I'm not at my computer I like to spend my time reading, keeping fit and playing guitar.
            </p>
          </div>

          <div className="skills">
            <div className="skills__row">
              <div className="skills__item skills__item-fade-in">
                <div className="skills__item-icon">
                  <img src={openaiIcon} alt="OpenAI" />
                </div>
                <div className="skills__item-name">LLMs</div>
              </div>
              <div className="skills__item skills__item-fade-in">
                <div className="skills__item-icon">
                  <img src={yoloIcon} alt="YOLO" />
                </div>
                <div className="skills__item-name">CV</div>
              </div>
            </div>

            <div className="skills__row">
              <div className="skills__item skills__item-fade-in">
                <div className="skills__item-icon">
                  <img src={reactIcon} alt="React" />
                </div>
                <div className="skills__item-name">React</div>
              </div>
              <div className="skills__item skills__item-fade-in">
                <div className="skills__item-icon">
                  <img src={pythonIcon} alt="Python" />
                </div>
                <div className="skills__item-name">Python</div>
              </div>
              <div className="skills__item skills__item-fade-in">
                <div className="skills__item-icon">
                  <img src={postgresIcon} alt="PostgreSQL" />
                </div>
                <div className="skills__item-name">SQL</div>
              </div>
            </div>

            <div className="skills__row">
              <div className="skills__item skills__item-fade-in">
                <div className="skills__item-icon">
                  <img src={stablediffusionIcon} alt="Stable Diffusion" />
                </div>
                <div className="skills__item-name">Diffusion</div>
              </div>
              <div className="skills__item skills__item-fade-in">
                <div className="skills__item-icon">
                  <img src={prusaIcon} alt="3D Printing" />
                </div>
                <div className="skills__item-name">3D-Printing</div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Work Section */}
      <section className="work" id="work">
        <h2 className="work__heading section-heading">Work</h2>

        <div className="work__carousel-wrapper">
          
        <div className="work__carousel">
          
          <button className="carousel__arrow carousel__arrow--left" onClick={() => handleWorkArrowScroll(-1)}>⟨</button>
          <div className="carousel__track" ref={carouselRef} style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}>

            <div className="work__item" style={{ flex: '0 0 100%', scrollSnapAlign: 'start' }}>
              <div className="work__grid">
                <div className="work__box">
                  <h3 className="text-lg font-bold">DSO National Laboratories</h3>
                  <h4 className="text-sm font-medium">AI Research Intern</h4>
                  <p className="text-xs text-gray-400">May 2025 – Aug 2025</p>
                  {/* logo optional */}
                </div>
                <div className="work__box">
                  <div className="font-bold underline mb-1">Skills</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <ul className="list-disc list-inside text-sm space-y-1">
                    <li>LLMs</li>
                    <li>Prompt Engineering</li>
                    <li>System 2 Reasoning</li>
                    <li>Fact Correction</li>
                    <li>Python</li>
                    </ul>
                  </div>
                </div>
                <div className="work__box">
                  image here
                </div>
                <div className="work__box">
                  <div className="font-bold underline mb-1">Accomplishments</div>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Integrated System 2-style fine-tuning with context-parametric inversion.</li>
                    <li>Designed reasoning augmentations: summarization, fact extraction, correction.</li>
                    <li>Improved LLM reliability via modular cognitive pipelines.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="work__item" style={{ flex: '0 0 100%', scrollSnapAlign: 'start' }}>
              <div className="work__grid">
                {/* A: Job Info */}
                <div className="work__box">
                  <h3 className="text-lg font-bold">NTU-A*STAR Research</h3>
                  <h4 className="text-sm font-medium">3D Gen Intern</h4>
                  <p className="text-xs text-gray-400">May 2024 – Jul 2024</p>
                  {/* logo optional */}
                </div>

                {/* B: Skills */}
                <div className="work__box">
                  <div className="font-bold underline mb-1">Skills</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>3D Diffusion Models</li>
                      <li>Blender</li>
                      <li>Mesh Repair</li>
                      <li>PLA & Resin Printing</li>
                      <li>Python</li>
                    </ul>
                  </div>
                </div>

                {/* C: Image */}
                <div className="work__box">
                  image here
                </div>

                {/* D: Accomplishments */}
                <div className="work__box">
                  <div className="font-bold underline mb-1">Accomplishments</div>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Benchmarked 3D generation models (SDFusion, DreamFusion, Magic3D).</li>
                    <li>Generated and repaired 3D meshes using Blender.</li>
                    <li>Prepared models for PLA/resin printing, showcased at IEEE 2024.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="work__item" style={{ flex: '0 0 100%', scrollSnapAlign: 'start' }}>
              <div className="work__grid">
                {/* A: Job Info */}
                <div className="work__box">
                  <h3 className="text-lg font-bold">DSTA</h3>
                  <h4 className="text-sm font-medium">Software Intern, Computer Vision</h4>
                  <p className="text-xs text-gray-400">May 2023 – Jul 2023</p>
                  {/* logo optional */}
                </div>

                {/* B: Skills */}
                <div className="work__box">
                  <div className="font-bold underline mb-1">Skills</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Computer Vision</li>
                      <li>ArcFace</li>
                      <li>AdaFace</li>
                      <li>Facial Recognition</li>
                      <li>Surveillance Systems</li>
                    </ul>
                  </div>
                </div>

                {/* C: Image */}
                <div className="work__box">
                  image here
                </div>

                {/* D: Accomplishments */}
                <div className="work__box">
                  <div className="font-bold underline mb-1">Accomplishments</div>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Evaluated CV-based threat detection in large-scale events (up to 1000 pax).</li>
                    <li>Improved identification accuracy for NDP 2023 using facial recognition.</li>
                    <li>Benchmarked ArcFace and AdaFace models for real-time deployment.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <button className="carousel__arrow carousel__arrow--right" onClick={() => handleWorkArrowScroll(1)}>⟩</button>
        </div>
        
        </div>

      {/* Pills navigation */}
      <div className="carousel__pills" role="tablist" aria-label="Work carousel pagination">
        {[...Array(itemsCount)].map((_, i) => (
          <button
            key={i}
            className={`carousel__pill ${i === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={i === activeIndex}
            tabIndex={i === activeIndex ? 0 : -1}
          />
        ))}
      </div>

      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2 className="projects__heading section-heading">Projects</h2>
        
        <div className="project project-left">
          <a href="https://lifeinvadersocial.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="project__image-container">
              <div className="project__image-placeholder">LifeInvader Social</div>
            </div>
          </a>
          <div className="project__info">
            <h3 className="project__title">lifeinvader<br />Social Media App</h3>
            <p className="project__description">
              Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3.
            </p>
            <a href="https://lifeinvadersocial.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <div className="project__live-2">Live app</div>
            </a>
            <a href="https://github.com/bscottnz/life-invader-frontend" target="_blank" rel="noopener noreferrer">
              <div className="project__live-2">learn more</div>
            </a>
          </div>
        </div>

        <div className="project project-right">
          <div className="project__info">
            <h3 className="project__title">Chakra Chat<br />Messaging App</h3>
            <p className="project__description">
              Instant messaging application built with Next.JS, Firebase and Chakra UI.
            </p>
            <a href="https://nextjs-chakra-chatapp-qnhb6dq42-bscottnz.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="project__live-2">live app</div>
            </a>
            <a href="https://github.com/bscottnz/nextjs-chakra-chatapp" target="_blank" rel="noopener noreferrer">
              <div className="project__live-2">learn more</div>
            </a>
          </div>
          <a href="https://nextjs-chakra-chatapp-qnhb6dq42-bscottnz.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="project__image-container">
              <div className="project__image-placeholder">Chat App</div>
            </div>
          </a>
        </div>

        <div className="project project-left">
          <a href="https://bscottnz.github.io/esketch/" target="_blank" rel="noopener noreferrer">
            <div className="project__image-container">
              <div className="project__image-placeholder">Retro Sketch</div>
            </div>
          </a>
          <div className="project__info">
            <h3 className="project__title">Retro-Sketch<br />Pixel Sketch App</h3>
            <p className="project__description">
              Create pixel art with a variety of drawing tools.
            </p>
            <a href="https://bscottnz.github.io/esketch/" target="_blank" rel="noopener noreferrer">
              <div className="project__live-2">Live app</div>
            </a>
            <a href="https://github.com/bscottnz/esketch" target="_blank" rel="noopener noreferrer">
              <div className="project__live-2">learn more</div>
            </a>
          </div>
        </div>

        <div className="project project-right">
          <div className="project__info">
            <h3 className="project__title">// TO-DO<br />Productivity App</h3>
            <p className="project__description">
              Keep track of tasks with custom project folders and notes.
            </p>
            <a href="https://bscottnz.github.io/todo/" target="_blank" rel="noopener noreferrer">
              <div className="project__live-2">live app</div>
            </a>
            <a href="https://github.com/bscottnz/todo" target="_blank" rel="noopener noreferrer">
              <div className="project__live-2">learn more</div>
            </a>
          </div>
          <a href="https://bscottnz.github.io/todo/" target="_blank" rel="noopener noreferrer">
            <div className="project__image-container">
              <div className="project__image-placeholder">TO-DO App</div>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="contact__heading section-heading">Contact</h2>
        <p className="contact__text">
          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
        </p>
        <form className="contact__form" action="https://formspree.io/f/xdoprgpv" method="POST" onSubmit={handleSubmit}>
          <input className="contact__form-name" name="name" placeholder="Name" required />
          <input className="contact__form-email" type="email" name="_replyto" placeholder="Email" required />
          <textarea className="contact__form-message" name="message" placeholder="Message" required />
          <div className="contact__form-error-submit">
            <button type="submit" className="contact__form-submit-2 project__live-2">
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#hero">
          <div className="return-home">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24">
              <path fill="#fafafa" d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z" />
            </svg>
          </div>
        </a>
        <div className="socials">
          <a href="https://github.com/CobaltConcrete" target="_blank" rel="noopener noreferrer">
            <div className="socials__github">GitHub</div>
          </a>
          <a href="mailto:ganqingrong55@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="socials__email">Email</div>
          </a>
        </div>
        <p className="copyright">QING RONG ©2025</p>
      </footer>
    </div>
  );
};

export default App;