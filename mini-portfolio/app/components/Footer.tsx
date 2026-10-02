export default function Footer() {
    return (
        <footer className="site-footer">

            <div className="footer-content">

                <div>
                    <h2>AB<span>.</span></h2>

                    <p>
                        Creating modern digital experiences through
                        technology, creativity, and continuous learning.
                    </p>
                </div>

                <div className="social-links">

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Anthony Burgic. All rights reserved.
                </p>
            </div>

        </footer>
    );
}