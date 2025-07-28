// src/components/Hero.tsx
import { useEffect, useRef, useState } from 'react';
// import ArrowIcon from './icons/ArrowIcon'; // Adjust the import path as necessary

const Hero = () => {
  // (move your hero section constants and logic here)
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ArrowIcon = () => (
    <svg className="heading__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
    </svg>
  );

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



  return (
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
  );
};

export default Hero;
