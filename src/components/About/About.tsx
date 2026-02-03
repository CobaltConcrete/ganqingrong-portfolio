import styles from './About.module.css';
import ProfilePicture from '../../assets/icons/ProfilePicture.jpg';
// import ResumePDF from "../../assets/Work/ResumeSWE2026.pdf";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={`${styles.about__heading} section-heading`}>About</h2>

      {/* Picture + Description */}
      <div className={styles.about__intro}>
        <div className={`${styles.profile} ${styles.profile__fade_in}`}>
          <a href="/resume.html" target="_blank" rel="noopener noreferrer">
            <img
              src={ProfilePicture}
              alt="Profile"
              className={styles.profile__image}
            />
          </a>
          <p className={styles.profile__blurb}>
            Hi there! I'm a software engineer and AI researcher passionate about
            building intelligent systems that make an impact. My work bridges
            AI, full-stack development, and game mechanics, often blending
            creativity with deep technical rigor. Whether it's experimenting
            with large language models, designing backend systems, or
            prototyping game logic, I love solving real-world problems through
            code. Outside of projects, I enjoy exploring research papers,
            developing side games, and staying curious about how emerging
            technologies can shape the future.{' '}
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profile__cta}
              >
                Click on me to learn more!
              </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
