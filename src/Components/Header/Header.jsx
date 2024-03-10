import React from 'react';
import Heading from '../Heading/Heading';
import ContactCard from '../ContactCard/ContactCard';
import { ReactComponent as PuromedLogo } from "../../Resources/PuromedLogo.svg";
const Header = ({ title, subtitle, icon, level, noIcon }) => {
    return (
        <div className="header">
            <div className="header-content">
                <Heading level={level || 1} text={title} />
                {subtitle && <p className="header-subtitle">{subtitle}</p>}
            </div>
            {/* <img src={icon} alt="Header Icon" className="header-icon" /> */}
            {!noIcon ? (
                icon ? (
                    <div className='header-icon'>{icon}</div>
                ) : (
                    <div className='header-icon'><PuromedLogo /></div>
                )
            ) : null}
        </div >
    );
};

export default Header;
