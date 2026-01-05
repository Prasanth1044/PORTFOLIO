import React from 'react';

const Footer = () => {
    return (
        <footer>
            <footer-content>
                <div className="footer-copy">
                    <p>&copy; {new Date().getFullYear()} Prasanth PM. All rights reserved.</p>
                </div>
                <ul className="footer-links">
                    <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="mailto:your.email@example.com">Email</a></li>
                </ul>
            </footer-content>
        </footer>
    );
};

export default Footer;