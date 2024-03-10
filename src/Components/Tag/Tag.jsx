import React, { useState } from "react";

const Tag = ({ type, text, icon, disabled, onClick }) => {
    const tagClassName = `tag-button ${type} ${disabled ? 'disabled' : ''}`;

    return (
        <button className={tagClassName} onClick={onClick} >
            {icon && <span className="icon">{icon}</span>}
            <span className="text">{text}</span>
        </button>
    );
};

export default Tag;
