import React, { useState } from 'react';
const ProfileMenuOption = ({ icon, label, selected }) => {

    const ClassName = `profile-menu__option ${selected ? 'profile-menu__option--selected' : ''}`;

    return (
        <div className={ClassName}>
            <div className='profile-menu__option-icon'>{icon}</div>
            {label}
        </div>
    );
}

export default ProfileMenuOption;