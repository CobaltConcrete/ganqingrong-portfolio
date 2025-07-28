import { useEffect, useRef, useState } from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel.tsx';
import DSOlogo from '../../assets/Work/DSOlogo.png';
import DSO0 from '../../assets/Work/DSO0.png';
import ASTARlogo from '../../assets/Work/ASTARlogo.png';
import ASTAR0 from '../../assets/Work/ASTAR0.jpg';
import ASTAR1 from '../../assets/Work/ASTAR1.jpg';
import ASTAR2 from '../../assets/Work/ASTAR2.jpg';
import DSTAlogo from '../../assets/Work/DSTAlogo.jpg';
import DSTA0 from '../../assets/Work/DSTA0.jpg';
import DSTA1 from '../../assets/Work/DSTA1.jpg';
import styles from './Work.module.css';

const Work = () => {
  const ASTARwebsite = 'https://www.a-star.edu.sg/';
  const ASTARlinkedin = "https://www.linkedin.com/posts/nrfsg_ai-ai-ai-activity-7212432854327156736-krTl"
  const DSOwebsite = 'https://www.dso.org.sg/';
  const DSTAwebsite = 'https://www.dsta.gov.sg/';
  const DSTAvideo = "https://www.youtube.com/embed/V8-s6kP_Y5Q?autoplay=1&mute=1&loop=1&playlist=V8-s6kP_Y5Q&controls=1&modestbranding=1";
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsCount = 3;

  // Handle scroll to update active index
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

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
  };

  const handleWorkArrowScroll = (dir: number) => {
    let newIndex = activeIndex + dir;
    newIndex = Math.max(0, Math.min(newIndex, itemsCount - 1));
    scrollToIndex(newIndex);
  };

  return (
    <section className={styles.work} id="work">
      <h2 className={`${styles.work__heading} section-heading`}>Work</h2>

      <div className={styles['work__carousel-wrapper']}>
        <div className={styles['work__carousel']}>
          <button className={`${styles.carousel__arrow} ${styles['carousel__arrow--left']}`} onClick={() => handleWorkArrowScroll(-1)}>⟨</button>

          <div
            className={styles.carousel__track}
            ref={carouselRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >

            {/* Slide 1 – DSO */}
            <div className={styles.work__item} style={{ flex: '0 0 100%', scrollSnapAlign: 'start' }}>
              <div className={styles.work__grid}>
                {/* A: Company Info */}
                <div className={styles.work__box} style={{ gridArea: 'company', display: 'grid', gridTemplateColumns: '1fr 100px', alignItems: 'start', gap: '1rem' }}>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#60a5fa' }}>DSO National Laboratories</h3>
                    <h4 className="text-sm font-medium" style={{ color: '#ffffff' }}>AI Research Intern</h4>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>May 2025 – Aug 2025</p>
                  </div>

                  <div>
                    <a href={DSOwebsite} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                      <img
                        src={DSOlogo}
                        alt="DSO Logo"
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          marginLeft: '-30%',
                          marginTop: '10%',
                        }}
                      />
                    </a>
                  </div>

                </div>

                {/* B: Skills */}
                <div className={styles.work__box} style={{ gridArea: 'skills' }}>
                  <div className="font-bold underline mb-2" style={{ color: '#7dd3fc' }}>Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {['LLMs', 'Prompt Engineering', 'System 2 Reasoning', 'Fact Correction', 'Python'].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-sky-800 text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="bg-red-500 text-white font-bold text-xl p-4 rounded">
                    If you can see red background, Tailwind is working.
                  </div>
                </div>

                {/* C: Placeholder Image */}
                <div
                  className={styles.work__box}
                  style={{ gridArea: 'image', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ImageCarousel
                    name="ASTAR"
                    images={[DSO0]}
                  />
                </div>

                {/* D: Accomplishments */}
                <div className={styles.work__box} style={{ gridArea: 'accomplishments' }}>
                  <div className="font-bold underline mb-1" style={{ color: '#7dd3fc' }}>Accomplishments</div>
                  <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#ffffff' }}>
                    <li>Integrated System 2-style fine-tuning with context-parametric inversion.</li>
                    <li>Designed reasoning augmentations: summarization, fact extraction, correction.</li>
                    <li>Improved LLM reliability via modular cognitive pipelines.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Slide 2 – NTU-A*STAR */}
            <div className={styles.work__item} style={{ flex: '0 0 100%', scrollSnapAlign: 'start' }}>
              <div className={styles.work__grid}>

                <div className={styles.work__box} style={{ gridArea: 'company', display: 'grid', gridTemplateColumns: '1fr 100px', alignItems: 'start', gap: '1rem' }}>

                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#60a5fa' }}>NTU–A*STAR Research</h3>
                    <h4 className="text-sm font-medium" style={{ color: '#ffffff' }}>3D Gen Intern</h4>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>May 2024 – Jul 2024</p>
                  </div>

                  <div>
                    <a href={ASTARwebsite} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                      <img
                        src={ASTARlogo}
                        alt="A*STAR Logo"
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          marginLeft: '-30%',
                          marginTop: '10%',
                        }}
                      />
                    </a>
                  </div>

                </div>

                <div className={styles.work__box} style={{ gridArea: 'skills' }}>
                  <div className="font-bold underline mb-1" style={{ color: '#7dd3fc' }}>Skills</div>
                  <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#ffffff' }}>
                    <li>3D Diffusion Models</li>
                    <li>Blender</li>
                    <li>Mesh Repair</li>
                    <li>PLA & Resin Printing</li>
                    <li>Python</li>
                  </ul>
                </div>

                <div
                  className={styles.work__box}
                  style={{ gridArea: 'image', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ImageCarousel
                    name="ASTAR"
                    images={[{ src: ASTAR0, href: ASTARlinkedin }, { src: ASTAR1, href: ASTARlinkedin }, { src: ASTAR2, href: ASTARlinkedin }]}
                  />
                </div>

                <div className={styles.work__box} style={{ gridArea: 'accomplishments' }}>
                  <div className="font-bold underline mb-1" style={{ color: '#7dd3fc' }}>Accomplishments</div>
                  <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#ffffff' }}>
                    <li>Benchmarked 3D generation models (SDFusion, DreamFusion, Magic3D).</li>
                    <li>Generated and repaired 3D meshes using Blender.</li>
                    <li>Prepared models for PLA/resin printing, showcased at IEEE 2024.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Slide 3 – DSTA */}
            <div className={styles.work__item} style={{ flex: '0 0 100%', scrollSnapAlign: 'start' }}>
              <div className={styles.work__grid}>

                <div className={styles.work__box} style={{ gridArea: 'company', display: 'grid', gridTemplateColumns: '1fr 100px', alignItems: 'start', gap: '1rem' }}>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#60a5fa' }}>DSTA</h3>
                    <h4 className="text-sm font-medium" style={{ color: '#ffffff' }}>Software Intern, Computer Vision</h4>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>May 2023 – Jul 2023</p>
                  </div>

                  <div>
                    <a href={DSTAwebsite} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                      <img
                        src={DSTAlogo}
                        alt="DSTA Logo"
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          marginLeft: '-30%',
                          marginTop: '10%',
                        }}
                      />
                    </a>
                  </div>

                </div>
                  <div className={styles.work__box} style={{ gridArea: 'skills' }}>
                    <div className="font-bold underline mb-1" style={{ color: '#7dd3fc' }}>Skills</div>
                    <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#ffffff' }}>
                      <li>Computer Vision</li>
                      <li>ArcFace</li>
                      <li>AdaFace</li>
                      <li>Facial Recognition</li>
                      <li>Surveillance Systems</li>
                    </ul>
                  </div>
                  <div className={styles.work__box} style={{ gridArea: 'image', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ImageCarousel
                      name="ASTAR"
                      images={[ { src: DSTAvideo }, { src: DSTA0, href: DSTAwebsite }, { src: DSTA1, href: DSTAwebsite } ]}
                    />
                  </div>
                  <div className={styles.work__box} style={{ gridArea: 'accomplishments' }}>
                    <div className="font-bold underline mb-1" style={{ color: '#7dd3fc' }}>Accomplishments</div>
                    <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#ffffff' }}>
                      <li>Evaluated CV-based threat detection in large-scale events (up to 1000 pax).</li>
                      <li>Improved identification accuracy for NDP 2023 using facial recognition.</li>
                      <li>Benchmarked ArcFace and AdaFace models for real-time deployment.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <button className={`${styles.carousel__arrow} ${styles['carousel__arrow--right']}`} onClick={() => handleWorkArrowScroll(1)}>⟩</button>
          </div>
        </div>

        {/* Pills navigation */}
        <div className={styles.carousel__pills} role="tablist" aria-label="Work carousel pagination">
          {[...Array(itemsCount)].map((_, i) => (
            <button
              key={i}
              className={`${styles.carousel__pill} ${i === activeIndex ? styles.active : ''}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              role="tab"
              aria-selected={i === activeIndex}
              tabIndex={i === activeIndex ? 0 : -1}
            />
          ))}
        </div>
    </section>
  );

};

export default Work;
