// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: '#333',
            padding: '1rem',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-around',
                margin: 0,
                padding: 0
            }}>
                <li>
                    <a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Home</a>
                </li>
                <li>
                    <a href="#projects" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Projects</a>
                </li>
                <li>
                    <a href="#certifications" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Certifications</a>
                </li>
                <li>
                    <a href="#skills" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>skills</a>
                </li>
                <li>
                    <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
