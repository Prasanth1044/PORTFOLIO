import React from 'react';

const Nav = () => {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => scrollToSection('.hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}>
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('.about-content')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}>
                        About
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('.projects-grid')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}>
                        Projects
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('.contact-wrapper')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit' }}>
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;