import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Tag from '../Tag/Tag';
import { useTranslation } from 'react-i18next';
const Banner = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileView, setMobileView] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const handleResize = () => {
            const newWindowWidth = window.innerWidth;
            setWindowWidth(newWindowWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth < 1024) {
            setMobileView(true);
        }
        else {
            setMobileView(false);
        }

    }, [windowWidth])

    return (
        <div className="banner__wrapper">
            <div className='banner__header'>
                <Header
                    level={3}
                    title={t(`fastest_term_baner`)}
                    subtitle={t('fastest_term_baner_description')}
                    icon={<box-icon name='timer'></box-icon>}
                />
                {mobileView && <div className='banner_tag banner_tag--mobile'><Tag type="primary" text={t(`fastest_term_tag`)} /></div>}
            </div>
            {!mobileView && <div className='banner_tag '><Tag type="primary" text={t(`fastest_term_tag`)} /></div>}
            {children}
        </div>
    );
}
export default Banner;