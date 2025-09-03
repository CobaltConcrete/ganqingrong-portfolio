import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import ImageCarousel from '../ImageCarousel/ImageCarousel.tsx';
import Eatsee0 from '../../assets/Projects/EatSee0.png'
import Eatsee1 from '../../assets/Projects/EatSee1.png'
import Pantheon0 from '../../assets/Projects/Pantheon0.png';
import Pantheon1 from '../../assets/Projects/Pantheon1.png';
import Pantheon2 from '../../assets/Projects/Pantheon2.png';
import Pantheon3 from '../../assets/Projects/Pantheon3.png';
// import PantheonVideo from '../../assets/Projects/PantheonVideo.mp4';
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
import BerthingBridgePaper from '../../assets/Projects/BerthingBridge_paper.pdf';
import eCycle0 from '../../assets/Projects/eCycle0.png';
import RealAnot0 from '../../assets/Projects/RealAnot0.png';
import RealAnot1 from '../../assets/Projects/RealAnot1.png';

import styles from './Project.module.css';

const Project = () => {
  // (move your hero section constants and logic here)
  const BerthingBridgeVideo = "https://www.youtube.com/embed/S7lvtBrAsu4?autoplay=1&mute=1&loop=1&playlist=S7lvtBrAsu4&controls=1&modestbranding=1";
  const eCycleVideo = "https://www.youtube.com/embed/ZFQg8qSyFPw?autoplay=1&mute=1&loop=1&playlist=ZFQg8qSyFPw&controls=1&modestbranding=1";
  const PantheonGame = "https://thortol.itch.io/pantheon";
  const PantheonVideo = "https://www.youtube.com/embed/5Q-6Qt7IhZQ?autoplay=1&mute=1&loop=1&playlist=5Q-6Qt7IhZQ&controls=1&modestbranding=1";
  const TOSSVideo = "https://www.youtube.com/embed/nAbwYBqBZuU?autoplay=1&mute=1&loop=1&playlist=nAbwYBqBZuU&controls=1&modestbranding=1";
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

  return (
    <section className={styles.projects} id="projects">
      <h2 className={`${styles['projects__heading']} section-heading`}>Projects</h2>



      <div className={`${styles.project} ${styles['project-left']}`}>
        <div className={styles['project__image-container']}>
          <div className={styles['project__image-placeholder']}>
            <ImageCarousel
              name="Eatsee"
              images={[{ src: Eatsee0 }, {src: Eatsee1 }]}
            />
          </div>
        </div>

        <div className={styles['project__info']}>
          <h3 className={styles['project__title']}>EatSee</h3>
          <h4 className={styles['project__subtitle']}>Food & Social Matching Platform</h4>
          <p className={styles['project__description']}>
            Telegram bot that matches users with compatible food buddies based on shared cuisine preferences and social compatibility, including age and gender preferences. Built with Flask, FastAPI, and PostgreSQL.
          </p>

          {/* <a href="https://lifeinvadersocial.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Live app</div>
          </a>
          <a href="https://github.com/bscottnz/life-invader-frontend" target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Learn more</div>
          </a> */}
        </div>
      </div>


      <div className={`${styles.project} ${styles['project-right']}`}>
        <div className={styles['project__image-container']}>
          <div className={styles['project__image-placeholder']}>
            <ImageCarousel
              name="ECYCLE"
              images={[{ src: eCycleVideo }, { src: eCycle0, href: eCycleVideo }]}
            />
          </div>
        </div>

        <div className={styles['project__info']}>
          <h3 className={styles['project__title']}>eCycle</h3>
          <h4 className={styles['project__subtitle']}>E-Waste Disposal & Community Platform</h4>
          <p className={styles['project__description']}>
            Web app to locate nearby e-waste disposal, recycling, and repair facilities. Includes a community forum for users to post questions, share pictures, and connect with businesses to confirm accepted items, promoting responsible e-waste management. Built with Flask, PostgreSQL, and Google Maps API.
          </p>
          <a href="https://lifeinvadersocial.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Live app</div>
          </a>
          <a href={eCycleVideo} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Demo</div>
          </a>
        </div>
      </div>



      <div className={`${styles.project} ${styles['project-left']}`}>
        <div className={styles['project__image-container']}>
          <div className={styles['project__image-placeholder']}>
            <ImageCarousel
              name="Pantheon"
              images={[{ src: Pantheon0, href: PantheonVideo }, { src: PantheonVideo }, { src: Pantheon1, href: PantheonVideo }, { src: Pantheon2, href: PantheonVideo }, { src: Pantheon3, href: PantheonVideo }]}
            />
          </div>
        </div>
        <div className={styles['project__info']}>
          <h3 className={styles['project__title']}>Pantheon</h3>
          <h4 className={styles['project__subtitle']}>AI-Powered Dungeon Crawler Game</h4>
          <p className={styles['project__description']}>
            Top-down shooter dungeon crawler allowing players to spawn custom weapons, items, and buffs using large language models. Built with Unity, OpenAPI, and FastAPI.
          </p>
          <a href={PantheonGame} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Play</div>
          </a>
          <a href={PantheonVideo} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Demo</div>
          </a>
        </div>
      </div>

      <div className={`${styles.project} ${styles['project-right']}`}>
        <div className={styles['project__image-container']}>
          <div className={styles['project__image-placeholder']}>
            <ImageCarousel
              name="TOSS"
              images={[{ src: TOSS0, href: TOSSPoster }, { src: TOSSVideo }]}
            />
          </div>
        </div>
        <div className={styles['project__info']}>
          <h3 className={styles['project__title']}>TOSS</h3>
          <h4 className={styles['project__subtitle']}>Tracking Oriented Semantic Segmentation</h4>
          <p className={styles['project__description']}>
            Combines object tracking (YOLOv11) with semantic segmentation models (DeepLabv3+, MobileNetv3) to enhance video analysis accuracy. Built using MMSegmentation, OpenCV, and NumPy for advanced video analysis
          </p>
          <a href={TOSSVideo} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Demo</div>
          </a>
          <a href={TOSSPoster} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Poster</div>
          </a>
          <a href={TOSSPaper} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Paper</div>
          </a>
        </div>
      </div>

      <div className={`${styles.project} ${styles['project-left']}`}>
        <div className={styles['project__image-container']}>
          <div className={styles['project__image-placeholder']}>
            <ImageCarousel
              name="HACX"
              images={[{ src: HACX0, href: BerthingBridgeVideo }, { src: HACX1, href: BerthingBridgeVideo }, { src: HACX2, href: BerthingBridgeVideo }, { src: BerthingBridgeVideo }]}
            />
          </div>
        </div>
        <div className={styles['project__info']}>
          <h3 className={styles['project__title']}>Berthing Bridge</h3>
          <h4 className={styles['project__subtitle']}>Automated Ship Berthing System</h4>
          <p className={styles['project__description']}>
            Utilizes computer vision with YOLOX alongside Arduino ultrasonic sensors to accurately detect embarkation points and measure distances, streamlining and accelerating the ship berthing process with replica model. Built with OpenCV, YOLOX, Arduino, and 3D Printing.
          </p>
          <a href={BerthingBridgeVideo} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Demo</div>
          </a>
          <a href={BerthingBridgePaper} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Paper</div>
          </a>
        </div>
      </div>

      <div className={`${styles.project} ${styles['project-right']}`}>
        <div className={styles['project__image-container']}>
          <div className={styles['project__image-placeholder']}>
            <ImageCarousel
              name="ByeBike"
              images={[{ src: ByeBike0, href: ByeBikePoster }, { src: ByeBike1, href: ByeBikePoster }, { src: ByeBikeArchitecture, href: ByeBikePoster }]}
            />
          </div>
        </div>

        <div className={styles['project__info']}>
          <h3 className={styles['project__title']}>ByeBike</h3>
          <h4 className={styles['project__subtitle']}>Walkway-Cycling Path Safety Surveillance</h4>
          <p className={styles['project__description']}>
            Uses YOLOX to detect cyclists encroaching on pedestrian walkways and sends real-time alerts to both pedestrians and cyclists for safety. Built with OpenCV, YOLOX, and a polygon-based zone tracking pipeline.
          </p>
          <a href={ByeBikePoster} target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Poster</div>
          </a>
        </div>
      </div>

      <div className={`${styles.project} ${styles['project-left']}`}>
        <div className={styles['project__image-container']}>
          <div className={styles['project__image-placeholder']}>
            <ImageCarousel
              name="RealAnot"
              images={[{ src: RealAnot0 }, {src: RealAnot1 }]}
            />
          </div>
        </div>
        <div className={styles['project__info']}>
          <h3 className={styles['project__title']}>RealAnot</h3>
          <h4 className={styles['project__subtitle']}>AI-Powered Social Media Analyzer Bot</h4>
          <p className={styles['project__description']}>
            Telegram bot that analyzes photos, text, and links from platforms like YouTube, Instagram, and news sites. Integrates web scraping, search, and AI vision/audio models to deliver rich content insights. Built with Python, Telegram Bot API, EnsembleData, ExaAI, Groq, llama-3.2, and Whisper.
          </p>
          <a href="https://t.me/DLWqr1bot" target="_blank" rel="noopener noreferrer">
            <div className={styles['project__live-2']}>Try it!</div>
          </a>
        </div>
      </div>


{/* <div className={`${styles.project} ${styles['project-right']}`}>
  <div className={styles['project__image-container']}>
    <div className={styles['project__image-placeholder']}>
      <ImageCarousel
        name="CS180"
        images={[
          { src: RealAnot0 }, 
          { src: RealAnot1 }
        ]}
      />
    </div>
  </div>

  <div className={styles['project__info']}>
    <h3 className={styles['project__title']}>CS180</h3>
    <h4 className={styles['project__subtitle']}>Advanced Coursework Project</h4>
    <p className={styles['project__description']}>
      A dedicated page showcasing details for CS180. Built as part of the portfolio using React Router to enable
      smooth navigation between project pages.
    </p>

    <Link to="/cs180">
      <div className={styles['project__live-2']}>View Page</div>
    </Link>
  </div>
</div> */}





    </section>
  );
};

export default Project;