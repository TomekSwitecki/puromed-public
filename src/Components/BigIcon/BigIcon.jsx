import React from 'react';
import Label from '../Label/Label';

const BigIcon = ({ icon, label }) => {
    return (
        <div className="big-icon__container">
            {icon}
            <Label className="icon-label">{label}</Label>
        </div>
    );
};

export default BigIcon;
