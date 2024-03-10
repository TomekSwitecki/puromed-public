import React, { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import { TestVial } from '@vectopus/atlas-icons-react';
import { ClipboardTestTube } from '@vectopus/atlas-icons-react';
import { useTranslation } from 'react-i18next';
const SidebarMenu = ({ currentPath }) => {
    const { t } = useTranslation();
    return (
        <div className="sidebar-menu">
            <MenuButton selected={currentPath === "/profile"} linkTo={"/profile"}>
                <Header
                    level={3}
                    title={t(`patient_profile`)}
                    subtitle={t(`patient_data_description`)}
                    icon={<box-icon name='user-circle' ></box-icon>}
                />
            </MenuButton>
            <MenuButton selected={currentPath === "/scheduled-visits"} linkTo={"/scheduled-visits"}>
                <Header
                    level={3}
                    title={t(`scheduled-visits`)}
                    subtitle={t(`scheduled-visits_description`)}
                    icon={<box-icon name='calendar'></box-icon>}
                />
            </MenuButton>
            <MenuButton selected={currentPath === "/results"} linkTo={"/results"}>
                <Header
                    level={3}
                    title={t(`results`)}
                    subtitle={t(`results_description`)}
                    icon={<TestVial size={24} />}
                />
            </MenuButton>
            <MenuButton selected={currentPath === "/history"} linkTo={"/history"} >
                <Header
                    level={3}
                    title={t(`history`)}
                    subtitle={t(`history_description`)}
                    icon={<box-icon name='history' ></box-icon>}
                />
            </MenuButton>
        </div >
    );
};

export default SidebarMenu;
