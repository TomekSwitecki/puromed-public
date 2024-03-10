import React, { useState } from 'react';
import Header from "../Header/Header";
import Button, { ButtonType, ButtonColor, ButtonShape, ButtonSize } from '../../Components/Button/Button';
import { useTranslation } from 'react-i18next';
const ResultCard = ({ date }) => {
    const { t } = useTranslation();
    return (
        <div className="result-card">
            <Header
                level={3}
                title={date}
                subtitle={t(`results`)}
                noIcon
            />
            <Button
                size={ButtonSize.Compact}
                type={ButtonType.Filled}
                color={ButtonColor.Primary}
                shape={ButtonShape.Pill}
                text={t(`download_results`)}
                submit
            />
        </div>
    );
}

export default ResultCard;