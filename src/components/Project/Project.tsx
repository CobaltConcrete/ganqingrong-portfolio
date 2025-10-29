import { useEffect, useRef } from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel.tsx';
import Eatsee0 from '../../assets/Projects/Eatsee0.png'
import Eatsee1 from '../../assets/Projects/Eatsee1.png'
import Pantheon0 from '../../assets/Projects/Pantheon0.png';
import Pantheon1 from '../../assets/Projects/Pantheon1.png';
import Pantheon2 from '../../assets/Projects/Pantheon2.png';
import Pantheon3 from '../../assets/Projects/Pantheon3.png';
import HACX0 from '../../assets/Projects/HACX0.jpg';
import HACX1 from '../../assets/Projects/HACX1.jpg';
import HACX2 from '../../assets/Projects/HACX2.jpg';
import TOSS0 from '../../assets/Projects/TOSS0.png';
import TOSSPaper from '../../assets/Projects/TOSS_paper.pdf';
import TOSSPoster from '../../assets/Projects/TOSS_poster.pdf';
import ByeBike0 from '../../assets/Projects/ByeBike0.png';
import ByeBike1 from '../../assets/Projects/ByeBike1.png';
import ByeBikeArchitecture from '../../assets/Projects/ByeBikeArchitecture.jpg';
import ByeBikePoster from '../../assets/Projects/ByeBike_poster.pdf';
import BreakFree0 from '../../assets/Projects/BreakFree0.jpg';
import BreakFree1 from '../../assets/Projects/BreakFree1.png';
import BerthingBridgePaper from '../../assets/Projects/BerthingBridge_paper.pdf';
import NightingAIe0 from '../../assets/Projects/NightingAIe0.png';
import NightingAIe1 from '../../assets/Projects/NightingAIe1.png';
import NightingAIe2 from '../../assets/Projects/NightingAIe2.png';
import NightingAIe3 from '../../assets/Projects/NightingAIe3.png';
import eCycle0 from '../../assets/Projects/eCycle0.png';
import eCycle1 from '../../assets/Projects/eCycle1.png';
import eCycle2 from '../../assets/Projects/eCycle2.png';
import eCycle3 from '../../assets/Projects/eCycle3.png';
import eCycle4 from '../../assets/Projects/eCycle4.png';
import RealAnot0 from '../../assets/Projects/RealAnot0.png';
import RealAnot1 from '../../assets/Projects/RealAnot1.png';
import OSPS0 from '../../assets/Projects/OSPS0.png';
import OSPS1 from '../../assets/Projects/OSPS1.png';
import OSPS2 from '../../assets/Projects/OSPS2.png';

import styles from './Project.module.css';

const Project = () => {
  const BerthingBridgeVideo = "https://www.youtube.com/embed/S7lvtBrAsu4?autoplay=1&mute=1&loop=1&playlist=S7lvtBrAsu4&controls=1&modestbranding=1";
  const eCycleVideo = "https://www.youtube.com/embed/ZFQg8qSyFPw?autoplay=1&mute=1&loop=1&playlist=ZFQg8qSyFPw&controls=1&modestbranding=1";
  const eCycleWebsite = "https://ecycle-1.onrender.com/";
  const NightingAIeVideo = "https://www.youtube.com/embed/lXCTaN2MdRk?autoplay=1&mute=1&loop=1&playlist=lXCTaN2MdRk&controls=1&modestbranding=1";
  const PantheonGame = "https://thortol.itch.io/pantheon";
  const PantheonVideo = "https://www.youtube.com/embed/5Q-6Qt7IhZQ?autoplay=1&mute=1&loop=1&playlist=5Q-6Qt7IhZQ&controls=1&modestbranding=1";
  const TOSSVideo = "https://www.youtube.com/embed/nAbwYBqBZuU?autoplay=1&mute=1&loop=1&playlist=nAbwYBqBZuU&controls=1&modestbranding=1";
  const OSPSTelebot = "https://t.me/OweSPayS_bot"

  const projectItemVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = projectItemVideoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch((e) => console.error('Video play failed:', e));
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (projectItemVideoRef.current) {
      observer.observe(projectItemVideoRef.current);
    }

    return () => {
      if (projectItemVideoRef.current) {
        observer.unobserve(projectItemVideoRef.current);
      }
    };
  }, []);

  type CarouselMedia = { src: string; href?: string };
  type Project = {
    name: string;
    subtitle: string;
    description: string;
    images: CarouselMedia[];
    links?: { label: string; href: string }[];
  };

  const projects: Project[] = [
    {
      name: "eCycle",
      subtitle: "E-Waste Disposal & Community Platform",
      description:
        "Web app to locate nearby e-waste disposal, recycling, and repair facilities. Includes a community forum for users to post questions, share pictures, and connect with businesses to confirm accepted items, promoting responsible e-waste management. Built with Flask, PostgreSQL, and Google Maps API.",
      images: [
        { src: eCycle2, href: eCycleWebsite },
        { src: eCycle0, href: eCycleWebsite },
        { src: eCycle1, href: eCycleWebsite },
        { src: eCycle3, href: eCycleWebsite },
        { src: eCycle4, href: eCycleWebsite },
        { src: eCycleVideo },
      ],
      links: [
        { label: "Live app", href: eCycleWebsite },
        { label: "Demo", href: eCycleVideo },
      ],
    },
    {
      name: "TOSS",
      subtitle: "Tracking Oriented Semantic Segmentation",
      description:
        "Combines object tracking (YOLOv11) with semantic segmentation models (DeepLabv3+, MobileNetv3) to enhance video analysis accuracy. Built using OpenCV and MMsegmentation for advanced video analysis",
      images: [
        { src: TOSS0, href: TOSSPoster },
        { src: TOSSVideo },
      ],
      links: [
        { label: "Demo", href: TOSSVideo },
        { label: "Poster", href: TOSSPoster },
        { label: "Paper", href: TOSSPaper },
      ],
    },
    {
      name: "Berthing Bridge",
      subtitle: "Automated Ship Berthing System",
      description:
        "Utilizes computer vision with YOLOX alongside Arduino ultrasonic sensors to accurately detect embarkation points and measure distances, streamlining and accelerating the ship berthing process with replica model. Built with OpenCV, YOLOX, Arduino, and 3D Printing.",
      images: [
        { src: HACX0, href: BerthingBridgeVideo },
        { src: HACX1, href: BerthingBridgeVideo },
        { src: HACX2, href: BerthingBridgeVideo },
        { src: BerthingBridgeVideo },
      ],
      links: [
        { label: "Demo", href: BerthingBridgeVideo },
        { label: "Paper", href: BerthingBridgePaper },
      ],
    },
    {
      name: "ByeBike",
      subtitle: "Walkway-Cycling Path Safety Surveillance",
      description:
        "Uses YOLOX to detect cyclists encroaching on pedestrian walkways and sends real-time alerts to both pedestrians and cyclists for safety. Built with OpenCV, YOLOX, and a polygon-based zone tracking pipeline.",
      images: [
        { src: ByeBike0, href: ByeBikePoster },
        { src: ByeBike1, href: ByeBikePoster },
        { src: ByeBikeArchitecture, href: ByeBikePoster },
      ],
      links: [{ label: "Poster", href: ByeBikePoster }],
    },
      {
      name: "Break Free",
      subtitle: "Walkway & Cycling Path Safety Surveillance",
      description:
        "Break Free is a full-stack web application designed to help users break free from addictions like alcohol, smoking, and drugs, while facilitating secure online payments through Interledger. The platform monitors user progress and incentivizes healthy choices by providing vouchers for wellness activities. Developed using Vercel, Supabase, and the Interledger API.",
      images: [
        { src: BreakFree0 },
        { src: BreakFree1 },
      ],
    },
    {
      name: "NightingAIe",
      subtitle: "Medical Document Translation for Elderly",
      description:
        "NightingAIe is a tool designed to translate complex medical documents into simpler, easy-to-understand dialects for elderly users with language comprehension challenges. It combines OCR for document reading, advanced translation APIs, and text-to-speech technology to deliver accessible medical content alongside doctor's consultation in both text and audio formats.",
      images: [
        { src: NightingAIe0, href: NightingAIeVideo },
        { src: NightingAIeVideo },
        { src: NightingAIe1, href: NightingAIeVideo },
        { src: NightingAIe2, href: NightingAIeVideo },
        { src: NightingAIe3, href: NightingAIeVideo },
      ],
      links: [{ label: "Demo", href: NightingAIeVideo }],
    },
    {
      name: "Pantheon",
      subtitle: "AI-Powered Dungeon Crawler Game",
      description:
        "Top-down shooter dungeon crawler allowing players to spawn custom weapons, items, and status buffs using large language models. Built with Unity, OpenAPI, and FastAPI.",
      images: [
        { src: Pantheon0, href: PantheonVideo },
        { src: PantheonVideo },
        { src: Pantheon1, href: PantheonVideo },
        { src: Pantheon2, href: PantheonVideo },
        { src: Pantheon3, href: PantheonVideo },
      ],
      links: [
        { label: "Play", href: PantheonGame },
        { label: "Demo", href: PantheonVideo },
      ],
    },
    {
      name: "O$P$",
      subtitle: "Social Debt Tracker",
      description:
        "Telegram bot designed to simplify shared expenses and debt reminders among friends. Handles expense logging, balance reconciliation, and automated settlement nudges with smart notifications. Built using Supabase for persistent data storage, Python, and Telegram Bot API. Deployed on Heroku with lightweight serverless logic for reliability and low cost.",
      images: [
        { src: OSPS0, href: OSPSTelebot },
        { src: OSPS1, href: OSPSTelebot },
        { src: OSPS2, href: OSPSTelebot },
      ],
      links: [{ label: "Try it!", href: "https://t.me/OweSPayS_bot" }],
    },
    {
      name: "EatSee",
      subtitle: "Food & Social Matching Platform",
      description:
        "Telegram bot that matches users with compatible food buddies based on shared cuisine preferences and social compatibility, including age and gender preferences. Built with Flask, FastAPI, and PostgreSQL.",
      images: [
        { src: Eatsee0 },
        { src: Eatsee1 },
      ],
    },
    {
      name: "RealAnot",
      subtitle: "AI-Powered Social Media Analyzer Bot",
      description:
        "Telegram bot that analyzes photos, text, and links from platforms like YouTube, Instagram, and news sites. Integrates web scraping, search, and AI vision/audio models to deliver rich content insights. Built with Python, Telegram Bot API, EnsembleData, ExaAI, Groq, llama-3.2, and Whisper.",
      images: [
        { src: RealAnot0 },
        { src: RealAnot1 },
      ],
    },
    // Add Projects here
  ];

  return (

    <section className={styles.projects} id="projects">
      <h2 className={`${styles['projects__heading']} section-heading`}>Projects</h2>

      {projects.map((project, idx) => (
        <div
          key={project.name}
          className={`${styles.project} ${
            idx % 2 === 0 ? styles['project-left'] : styles['project-right']
          }`}
        >
          <div className={styles['project__image-container']}>
            <div className={styles['project__image-placeholder']}>
              <ImageCarousel
                name={project.name}
                images={project.images}
                autoplayOnView={true}
                autoScrollInterval={10000}
              />
            </div>
          </div>

          <div className={styles['project__info']}>
            <h3 className={styles['project__title']}>{project.name}</h3>
            <h4 className={styles['project__subtitle']}>{project.subtitle}</h4>
            <p className={styles['project__description']} style={{ textAlign: "justify" }}>
              {project.description}
            </p>

            {project.links?.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <div className={styles['project__live-2']}>{link.label}</div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>

  );
};

export default Project;