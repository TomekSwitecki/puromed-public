import React, { useState, useRef, useEffect } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';

const DatePicker = ({ id, label, onChange, value, required, placeholder, }) => {
    const [inputType, setInputType] = useState('text');
    //Date/Text switching is necessary to make date input placeholder
    const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Add state for calendar visibility
    const [date, setDate] = useState(new Date());
    const menuWrapperRef = useRef(null);


    const { t, i18n } = useTranslation();

    const [localeState, setLocaleState] = useState("pl-PL");

    useEffect(() => {
        if (i18n.language === 'en') {
            setLocaleState("en-US");
        } else if (i18n.language === 'pl') {
            setLocaleState("pl-PL");
        } else {
            setLocaleState("en-US");
        }
    }, [i18n.language]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuWrapperRef.current && !menuWrapperRef.current.contains(event.target)) {
                handleCloseCalendar();
            }
        };

        if (isCalendarOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isCalendarOpen]);

    const handleFocus = () => {
        setInputType('date');
        setIsCalendarOpen(true);
    };


    const handleBlur = () => {
        if (!value) {
            setInputType('date');
        }
    }



    const handleCloseCalendar = () => {
        setIsCalendarOpen(false);
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
        handleCloseCalendar();
        console.log("Selected Date:", newDate);
        const timezoneOffset = newDate.getTimezoneOffset();
        const adjustedDate = new Date(newDate.getTime() - timezoneOffset * 60 * 1000);
        const formattedDate = adjustedDate.toISOString().slice(0, 10);
        onChange({ target: { value: formattedDate } });
    };


    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate());
    return (
        <div className="date-picker" ref={menuWrapperRef}>
            <div className='label__container'>
                <label htmlFor={id} className="input__label">
                    {label}
                </label>
                {required && (
                    <label htmlFor={id} className="input__label--required">
                        {"Pole wymagane"}
                    </label>
                )}
            </div>
            <div className='date__input-container'>
                <input
                    placeholder={placeholder}
                    type={inputType}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    id={id}
                    className="date__input"
                    onChange={onChange}
                    value={value}
                    required
                />
                {isCalendarOpen && <Calendar minDate={minDate} className={"puromed_calendar"} locale={localeState} onChange={handleDateChange} value={date} minDetail={"year"} />}
            </div>
        </div>
    );
};

export default DatePicker;
