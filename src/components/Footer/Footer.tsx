import styles from './Footer.module.css';
import EmailIcon from '../../assets/icons/EmailIcon.png';
import GithubIcon from '../../assets/icons/GithubIcon.png';
import LinkedinIcon from '../../assets/icons/LinkedinIcon.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      {/* Return to top arrow */}
      <a href="#hero" className={styles.returnHome} aria-label="Back to top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#fafafa"
            d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
          />
        </svg>
      </a>

      {/* Social icons */}
      <div className={styles.socials}>
        <a
          className={styles.socialBtn}
          href="https://github.com/CobaltConcrete"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={GithubIcon} alt="GitHub" />
        </a>

        <a
          className={styles.socialBtn}
          href="mailto:ganqingrong55@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <img src={EmailIcon} alt="Email" />
        </a>

        <a
          className={styles.socialBtn}
          href="https://www.linkedin.com/in/qing-rong-gan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={LinkedinIcon} alt="LinkedIn" />
        </a>
      </div>

      <p className={styles.copyright}>QING RONG ©2025</p>

    </footer>
  );
};

export default Footer;
