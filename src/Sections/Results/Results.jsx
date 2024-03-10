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
import { ClipboardTestTube } from '@vectopus/atlas-icons-react';
import { TestVial } from '@vectopus/atlas-icons-react';
import ResultCard from '../../Components/ResultCard/ResultCard';
import { useTranslation } from 'react-i18next';

const options = [
    { label: 'Konsultacja urologiczna', value: 'Konsultacja urologiczna' },
    { label: 'Konsultacja urologiczna', value: 'Konsultacja urologiczna' },
];


const Results = ({ }) => {
    const location = useLocation();
    const { t } = useTranslation();
    const pageTitle = (
        <Header
            title={t(`results`)}
            subtitle={""}
            icon={<TestVial size={24} />}
        />
    );

    const formHeader = (
        <Header
            level={3}
            title={t(`results_list`)}
            subtitle={t(`results_description`)}
            icon={<TestVial size={24} />}
        />
    );


    const mainPart = (
        <React.Fragment>
            <ContentCard>
                {formHeader}
            </ContentCard>
            <ScrollableContent scrollStart={6}>
                <ResultCard date={"13 Lipiec 2023"} />
                <ResultCard date={"13 Lipiec 2023"} />
                <ResultCard date={"13 Lipiec 2023"} />
                <ResultCard date={"13 Lipiec 2023"} />
            </ScrollableContent>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <Navbar profileMenu navbarButton currentPath={location.pathname} />
            <Page id="results" pageTitle={pageTitle} mainPart={mainPart} sidebarMenu={<SidebarMenu currentPath={location.pathname} />} />
            <Footer />
        </React.Fragment>
    );
};

export default Results;
