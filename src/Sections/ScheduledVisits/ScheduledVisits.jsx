import React, { useState } from 'react';
import { Page } from '../../Components/Page/Page';
import Header from '../../Components/Header/Header';
import SidebarMenu from '../../Components/SiderbarMenu/SidebarMenu';
import { Navbar } from '../../Components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';
import { ContentCard } from '../../Components/ContentCard/ContentCard';
import ScrollableContent from '../../Components/ScrollableContent/ScrollableContent';
import Card from '../../Components/Card/Card';
import { useTranslation } from 'react-i18next';


const options = [
    { label: 'Konsultacja urologiczna', value: 'Konsultacja urologiczna' },
    { label: 'Konsultacja urologiczna', value: 'Konsultacja urologiczna' },
];



const ScheduledVisits = ({ }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const pageTitle = (
        <Header
            title={t(`scheduled-visits`)}
            subtitle={""}
            icon={<box-icon name='calendar' ></box-icon>}
        />
    );

    const formHeader = (
        <Header
            level={3}
            title={t(`scheduled-visits`)}
            subtitle={t(`scheduled-visits_description`)}
            icon={<box-icon name='calendar' ></box-icon>}
        />
    );


    const mainPart = (
        <React.Fragment>
            <ContentCard>
                {formHeader}
            </ContentCard>
            <ScrollableContent>
                <Card options={options} scheduledVisit />
                <Card options={options} scheduledVisit />
                <Card options={options} scheduledVisit />
            </ScrollableContent>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <Navbar profileMenu navbarButton currentPath={location.pathname} />
            <Page id="scheduled-visits" pageTitle={pageTitle} mainPart={mainPart} sidebarMenu={<SidebarMenu currentPath={location.pathname} />} />
            <Footer />
        </React.Fragment>
    );
};

export default ScheduledVisits;
