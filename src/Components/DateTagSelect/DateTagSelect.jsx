import React, { useState, useRef, useEffect } from 'react';
import Tag from '../Tag/Tag';
import HourPicker from '../HourPicker/HourPicker';
import { useTranslation } from 'react-i18next';
const DateTagSelect = ({ date, pastVisit, scheduledVisit, hideCancelVisit }) => {
    const [showHourPicker, setShowHourPicker] = useState(false);
    const menuWrapperRef = useRef(null);
    const { t } = useTranslation();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuWrapperRef.current && !menuWrapperRef.current.contains(event.target)) {
                handleCloseCalendar();
            }
        };

        if (showHourPicker) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showHourPicker]);

    const handleCloseCalendar = () => {
        setShowHourPicker(false);
    };


    let label;

    if (pastVisit) {
        label = t(`visit_date`);
    } else if (scheduledVisit) {
        label = t(`visit_date`);
    } else {
        label = t("closest_visit_date");
    }

    const dateControls = () => {

        if (pastVisit) {
            return (
                <div className='date-selector__controls date-selector__controls--past'>
                    <Tag disabled type="secondary" text="8:30" />
                    <Tag type="primary" text={t(`book_visit_again`)} />
                </div>)
        }
        else if (scheduledVisit) {
            return (
                < div className='date-selector__controls date-selector__controls--scheduled' >
                    <Tag type="primary" text="8:30" disabled />
                    <Tag type="secondary" text={t(`edit_visit`)} />
                    {hideCancelVisit && <Tag id="cancel-appointment" type="secondary" text={t(`cancel_visit`)} />}
                </div >)
        }
        else {
            return (
                <div className='date-selector__controls'>
                    <Tag linkTo="/appointment-details" type="primary" text="8:30" />
                    <Tag linkTo="/appointment-details" type="primary" text="12:10" />
                    <Tag linkTo="/appointment-details" type="primary" text="15:30" />
                    <Tag type="secondary" text={t(`show_more`)} onClick={() => setShowHourPicker(true)} />
                </div>)
        }
        ;
    }

    return (
        <div className='date-selector-container' ref={menuWrapperRef}>
            <span className='date-selector__label'>{label}</span>
            <div className='date-selector'>
                <div className='date-info'>
                    <div className='date-info__icon'><box-icon name='time-five'></box-icon></div>
                    {date}
                </div>
                <div className='date-selector__divider'>
                </div>
                {showHourPicker && <HourPicker />}
                {dateControls()}
            </div>
        </div>
    );
};

export default DateTagSelect;
