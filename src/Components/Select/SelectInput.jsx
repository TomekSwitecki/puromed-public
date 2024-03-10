import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const SelectInput = ({ id, label, options, onChange, value, append, disabled, placeholder }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null)
    const menuWrapperRef = useRef(null);

    const Options = () => {

        return (
            <div className="select__options-wrapper" >
                {options.map((option) => (
                    <option className={`select__option ${option.value === selectedOption ? 'select__option--selected' : ''}`} key={option.value} value={option.value} onClick={() => handleOptionClick(option.value)}>
                        {option.label}
                    </option>
                ))}
            </div>
        );
    };

    const toggleOptions = () => {
        if (!disabled)
            setShowOptions(!showOptions);
    };

    const handleOptionClick = (optionValue) => {
        setSelectedOption(optionValue);
        onChange(optionValue);
        toggleOptions();
    };

    useEffect(() => {
        setSelectedOption(value);
    }, [value]);

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

    const showPlaceholder = placeholder && selectedOption == null;

    return (
        <div className={`input-wrapper`} ref={menuWrapperRef}>
            {label && <label htmlFor={id} className='input__label'>{label}</label>}
            <div className='select__input-container' onClick={toggleOptions}>
                <select
                    className={showPlaceholder ? 'select__input select__input--placeholder' : 'select__input'}
                    id={id}
                    onChange={onChange}
                    value={value}
                // disabled={disabled}
                >
                    {selectedOption && <option>{selectedOption}</option>}
                    {showPlaceholder && < option className='select__option--placeholder'>{selectedOption || placeholder}</option>}
                </select>
                {append && <div className='select__input-container__append'>{append}</div>}
            </div>
            {showOptions && <Options />}
        </div >
    );
};

export default SelectInput;
