import React, { useState } from 'react';
import { Page } from '../../Components/Page/Page';
import Header from '../../Components/Header/Header';
import SelectInput from '../../Components/Select/SelectInput';
import Form from '../../Components/Form/Form';
import FormRow from "../../Components/Form/FormRow";
import TextInput from '../../Components/TextInput/TextInput';
import FormRowItem from '../../Components/Form/FormRowItem';
import SidebarMenu from '../../Components/SiderbarMenu/SidebarMenu';
import Button, { ButtonType, ButtonColor, ButtonShape } from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
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



const History = ({ }) => {
    const location = useLocation();
    const { t } = useTranslation();


    const pageTitle = (
        <Header
            title={t(`history`)}
            subtitle={""}
            icon={<box-icon name='history'></box-icon>}
        />
    );

    const formHeader = (
        <Header
            level={3}
            title={t(`history`)}
            subtitle={t(`history_description`)}
            icon={<box-icon name='history'></box-icon>}
        />
    );

    const mainPart = (
        <React.Fragment>
            <ContentCard>
                {formHeader}
            </ContentCard>
            <ScrollableContent header={formHeader}>
                <Card options={options} pastVisit />
                <Card options={options} pastVisit />
                <Card options={options} pastVisit />
            </ScrollableContent>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <Navbar profileMenu navbarButton currentPath={location.pathname} />
            <Page id="history" pageTitle={pageTitle} mainPart={mainPart} sidebarMenu={<SidebarMenu currentPath={location.pathname} />} />
            <Footer />
        </React.Fragment>
    );
};

export default History;
