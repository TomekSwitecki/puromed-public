import React, { Fragment, useState } from "react";
import en from "../../Resources/en.png";
import pl from "../../Resources/pl.png";
import { useTranslation } from 'react-i18next';

export const LanguageSelector = ({ id }) => {
    const { t, i18n } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };


    return (<div id={id} className="language-selectors">
        <button onClick={() => changeLanguage('pl')} className={`language-selector ${selectedLanguage === 'pl' ? 'language-selector--selected' : ''}`}><img src={pl}></img></button>
        <button onClick={() => changeLanguage('en')} className={`language-selector ${selectedLanguage === 'en' ? 'language-selector--selected' : ''}`}><img src={en}></img></button>
    </div>);
}

export default LanguageSelector;