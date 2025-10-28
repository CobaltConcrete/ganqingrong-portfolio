import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageCarousel.module.css';

type CarouselMedia = {
  src: string;
  href?: string; // Optional href link
};

type ImageCarouselProps = {
  images: (string | CarouselMedia)[];
  name: string;
  autoplayOnView?: boolean;
  autoScrollInterval?: number;
  pauseAfterClick?: number; // milliseconds to pause after manual click
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  name,
  autoplayOnView = false,
  autoScrollInterval = 5000,
  pauseAfterClick = 0
}) => {
  const normalizedImages: CarouselMedia[] = images.map(img =>
    typeof img === 'string' ? { src: img } : img
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(!autoplayOnView);
  const [pauseTimeout, setPauseTimeout] = useState<NodeJS.Timeout | null>(null);

  // IntersectionObserver to detect when carousel enters viewport
  useEffect(() => {
    if (!autoplayOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, [autoplayOnView]);

  // Auto-scroll effect
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      if (pauseTimeout) return; // skip auto-scroll while paused
      setActiveIndex(prev => {
        const next = (prev + 1) % normalizedImages.length;
        scrollToIndex(next);
        return next;
      });
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [inView, normalizedImages.length, autoScrollInterval, pauseTimeout]);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
  };

  // Handle manual clicks
  const handlePillClick = (index: number) => {
    scrollToIndex(index);
    setActiveIndex(index);

    // Pause auto-scroll for specified duration
    if (pauseTimeout) clearTimeout(pauseTimeout);
    const timeout = setTimeout(() => setPauseTimeout(null), pauseAfterClick);
    setPauseTimeout(timeout);
  };

  // Update activeIndex on manual scroll
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

  return (
    <div className={styles.imageCarouselWrapper}>
      <div className={styles.imageCarouselTrack} ref={carouselRef}>
        {normalizedImages.map(({ src, href }, i) => {
          const isVideo = /\.(mp4|webm|ogg)$/i.test(src);
          const isYouTube = /youtube\.com\/embed\//i.test(src);

          const media = isYouTube ? (
            <iframe
              src={src}
              title={`YouTube ${name} ${i}`}
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className={styles.imageCarouselImage}
              style={{ borderRadius: '12px' }}
            />
          ) : isVideo ? (
            <video
              src={src}
              controls
              muted
              className={styles.imageCarouselImage}
            />
          ) : (
            <img
              src={src}
              alt={`${name} ${i}`}
              className={styles.imageCarouselImage}
            />
          );

          return (
            <div className={styles.imageCarouselItem} key={`${name}-${i}`}>
              {href && !isYouTube ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block' }}
                >
                  {media}
                </a>
              ) : (
                media
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.imageCarouselPills}>
        {normalizedImages.map((_, i) => (
          <button
            key={`${name}-pill-${i}`}
            className={`${styles.imageCarouselPill} ${i === activeIndex ? styles.active : ''}`}
            onClick={() => handlePillClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
