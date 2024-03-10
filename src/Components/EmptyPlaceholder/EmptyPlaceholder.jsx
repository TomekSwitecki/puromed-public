import React, { useState } from 'react';
import Header from "../Header/Header";
import { ContentCard } from '../ContentCard/ContentCard';
import { useTranslation } from 'react-i18next';
export const EmptyPlaceholder = ({ title, subtitle }) => {
    const { t } = useTranslation();
    return (
        <ContentCard className={"empty-placeholder"}>
            <Header
                level={3}
                title={title}
                subtitle={subtitle}
            />
        </ContentCard>
    );
}

export default EmptyPlaceholder;