import React from 'react';
import { useTranslation } from 'react-i18next';
const TextInput = ({ id, label, required, placeholder, value, onChange, validationInfo }) => {
    const { t } = useTranslation();
    return (
        <div className={`text__input-container ${validationInfo ? 'text__input-container--invalid' : ''}`}>
            <div className='label__container'>
                <label htmlFor={id} className="input__label">
                    {label}
                </label>
                {required && (
                    <label htmlFor={id} className="input__label--required">
                        {t(`field_required`)}
                    </label>
                )}
            </div>
            <input
                type="text"
                id={id}
                className={`text__input`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {validationInfo && (
                <div className="text__input-validation-info">
                    {validationInfo}
                </div>
            )}
        </div>
    );
};

export default TextInput;
