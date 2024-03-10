import React, { useState } from 'react';

const ToggleButton = ({ id, label, checked, onChange, disabled, button_1_label, button_2_label }) => {

    const handleClick = (value) => {
        if (!disabled && value !== checked) {
            if (onChange) {
                onChange(value);
            }
        }
    };

    return (
        <div className="toggle">
            {label && <label htmlFor={id} className="input__label">{label}</label>}
            <div className="toggle-button__group">
                <button
                    className={`toggle-button ${!checked ? 'toggle-button--selected' : ''}`}
                    onClick={() => handleClick(false)}
                    disabled={disabled}
                >
                    {button_1_label}
                </button>
                <button
                    className={`toggle-button ${checked ? 'toggle-button--selected' : ''}`}
                    onClick={() => handleClick(true)}
                    disabled={disabled}
                >
                    {button_2_label}
                </button>
            </div>
        </div>
    );
};

export default ToggleButton;
