import './styles/App.css';
import gsap from 'gsap';
import React, { useRef } from 'react';

function NavItem({ link, item }) {
    const itemRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        gsap.fromTo(
            itemRef.current,
            {
                scale: 1,
                y: 0,
            },
            {
                scale: 1.2,
                y: -5,
                duration: 0.3,
                }
        )
    };

    return (
        <a
            className='nav-item'
            href={link}
            ref={itemRef}
            onClick={handleClick}
        >
            {item}
        </a>
    );
}

function NavBar() {
    return (
        <header>
            <nav>
                <NavItem link="#home" item="Accueil" />
                <NavItem link="#work" item="Projets" />
                <NavItem link="#aboutme" item="Qui suis-je ?" />
                <NavItem link="#contact" item="Contact" />
            </nav>
        </header>
    );
}

export default NavBar;