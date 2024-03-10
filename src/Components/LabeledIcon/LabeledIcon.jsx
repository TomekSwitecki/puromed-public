import React from 'react';
import IconAvatar from '../IconAvatar/IconAvatar';
import Label from '../Label/Label';
const LabeledIcon = ({ icon, label, color }) => {
    return (
        <div className="labeled-icon">
            <IconAvatar color={color} icon={icon}></IconAvatar>
            <Label className="icon-label">{label}</Label>
        </div>
    );
};

export default LabeledIcon;
