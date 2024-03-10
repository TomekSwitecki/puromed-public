
import React, { useState } from 'react';
export const IconAvatarColor = {
    Default: "default",
    Positive: "positive",
};
function IconAvatar({ icon, color }) {
    const defaultColor = IconAvatarColor.Default;
    const iconAvatarClass = `icon-avatar icon-avatar--${color || defaultColor}`;

    return (
        <div className={iconAvatarClass}>
            {icon}
        </div>
    );
}

export default IconAvatar;
