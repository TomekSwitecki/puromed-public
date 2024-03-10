

import React, { useState, useRef, useEffect } from 'react';
import Avatar from '../Avatar/Avatar';
import IconAvatar from '../IconAvatar/IconAvatar';
import { Account } from "@vectopus/atlas-icons-react";
import ProfileMenuOption from './ProfileMenuOption';
import { CalendarBell, ClipboardTestTube } from '@vectopus/atlas-icons-react';
import { Link, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { TestVial } from '@vectopus/atlas-icons-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';





const ProfileMenu = ({ }) => {
    const { t, i18n } = useTranslation();
    const [showOptions, setShowOptions] = useState(false);
    const menuWrapperRef = useRef(null);
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };


    const NavigationOptions = () => {
        const location = useLocation();
        return (
            <div className="profile-menu__options-wrapper">
                <Link to="/profile">
                    <ProfileMenuOption selected={location.pathname === "/profile"} icon={<box-icon name='user-circle'></box-icon>} label={t(`my_profile`)} />
                </Link>
                <Link to="/scheduled-visits">
                    <ProfileMenuOption selected={location.pathname === "/scheduled-visits"} icon={<CalendarBell size={24} />} label={t(`scheduled-visits`)} />
                </Link>
                <Link to="/results">
                    <ProfileMenuOption selected={location.pathname === "/results"} icon={<TestVial size={24} />} label={t(`results`)} />
                </Link>
                <Link to="/history">
                    <ProfileMenuOption selected={location.pathname === "/history"} icon={<box-icon name='history' ></box-icon>} label={t(`history`)} />
                </Link>
                <Link to="/login">
                    <ProfileMenuOption selected={location.pathname === "/login"} icon={<box-icon name='log-out' ></box-icon>} label={t(`log_out`)} />
                </Link>
                <LanguageSelector id={"options_language_selector"} />
            </div>
        );
    };

    const user = {
        name: 'Jan Kowalski',

    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuWrapperRef.current && !menuWrapperRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        if (showOptions) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showOptions]);
    return (
        <div className="profile-menu-wrapper" ref={menuWrapperRef}>
            <button className='profile-menu' onClick={toggleOptions}>
                <IconAvatar icon={<Account />}></IconAvatar>
                <div className='profile-menu__username'>{user.name}</div>
                <div className='profile-menu__chevron'><box-icon name='chevron-down' ></box-icon></div>
            </button >
            {showOptions && <NavigationOptions />}
        </div >
    );
};

export default ProfileMenu;
