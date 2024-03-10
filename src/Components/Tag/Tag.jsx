import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Tag = ({ type, text, icon, disabled, onClick, linkTo }) => {
    const tagClassName = `tag-button ${type} ${disabled ? 'disabled' : ''}`;

    const buttonContent = (
        <button className={tagClassName} onClick={onClick} disabled={disabled}>
            {icon && <span className="icon">{icon}</span>}
            <span className="text">{text}</span>
        </button>
    );

    if (linkTo) {
        return (
            <Link to={linkTo}>
                {buttonContent}
            </Link>
        );
    }

    return buttonContent;
};

export default Tag;