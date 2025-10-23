

const Footer = () => {
    
    return (
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
    );
};

export default Footer;