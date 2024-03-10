import React, { useState } from 'react';

const Label = ({ children, className }) => {
    return (
        <label className={className || "label"}>{children}</label>
    );
}

export default Label;