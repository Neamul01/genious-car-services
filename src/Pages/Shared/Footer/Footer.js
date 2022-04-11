import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p className='footer'>
                <small>Copywrite &copy;</small>{new Date().getFullYear()} Noman
            </p>
        </footer>
    );
};

export default Footer;