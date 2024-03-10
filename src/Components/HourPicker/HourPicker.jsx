import React, { useState, useEffect } from 'react';
import Button, { ButtonColor, ButtonSize, ButtonType, ButtonShape } from "../Button/Button";
import {
    format,
    addDays,
    subDays,
} from "date-fns";

import Heading from "../Heading/Heading";
import Tag from "../Tag/Tag";
import Divider from '../../Components/Divider/Divider';
import { isToday, isTomorrow } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { enUS, pl } from "date-fns/locale";
const HourPicker = () => {
    const { t, i18n } = useTranslation();

    const [dateStep, setDateStep] = useState(5);
    const [anchorDate, setAnchorDate] = useState(new Date());
    const [localeState, setLocaleState] = useState(pl);

    useEffect(() => {
        if (i18n.language === 'en') {
            setLocaleState(enUS);
        } else if (i18n.language === 'pl') {
            setLocaleState(pl);
        } else {
            setLocaleState(enUS);
        }
    }, [i18n.language]);

    const [isExpanded, setIsExpanded] = useState(false);
    const [disablePrevButton, setDisablePrevButton] = useState(true);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const newWindowWidth = window.innerWidth;
            setWindowWidth(newWindowWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 0 && windowWidth <= 390) {
            setDateStep(2);
        }
        else if (windowWidth < 501) {
            setDateStep(3);
        }
        else {
            setDateStep(5);
        }
    }, [windowWidth]);

    const checkIfInPast = (timeStamp) => {
        const currentDate = new Date();
        if (currentDate - timeStamp <= dateStep * 24 * 60 * 60 * 1000) {
            return (true);
        }
        else {
            return (false);
        }
    }

    const changeWeekHandle = (btnType) => {
        if (btnType === "prev") {
            const prevAnchorPoint = subDays(anchorDate, dateStep)
            if (checkIfInPast(prevAnchorPoint)) {
                setAnchorDate(prevAnchorPoint);
            }
        }
        if (btnType === "next") {
            const nextAnchorPoint = addDays(anchorDate, dateStep)
            setAnchorDate(nextAnchorPoint);
            setDisablePrevButton(false);
        }
    };


    useEffect(() => {
        const prevAnchorPoint = subDays(anchorDate, dateStep);
        if (checkIfInPast(prevAnchorPoint)) {
            setDisablePrevButton(false);
        } else {
            setDisablePrevButton(true);
        }
    }, [anchorDate]);


    const renderHeader = () => {
        return (
            <Heading level={4} text={t(`select_visit_date`)} />
        );
    };

    const renderDays = () => {
        const startDate = anchorDate;
        const dateFormat = "EEE";
        const monthFormat = "MMM";
        const days = [];
        for (let i = 0; i < dateStep; i++) {
            const dayDate = addDays(startDate, i);
            const formattedDate = format(dayDate, dateFormat, { locale: localeState });
            const dayNumber = dayDate.getDate();
            const monthName = format(dayDate, monthFormat, { locale: localeState });

            let dayLabel;
            if (isToday(dayDate)) {
                dayLabel = t(`today`);
            } else if (isTomorrow(dayDate)) {
                dayLabel = t(`tommorow`);
            }

            days.push(
                <div className="day-info" key={i}>
                    <div className='day-info-container'>
                        <span className="day-name">
                            {dayLabel ? dayLabel : formattedDate}
                        </span>
                        <span className="day-number">{dayNumber + " " + monthName}</span>
                    </div>
                </div>
            );
        }
        return (
            <div className="days-row">
                {days}
            </div>
        );
    };


    const renderCells = () => {
        const startDate = anchorDate;
        let day = startDate;
        const rows = [];
        let days = [];
        for (let i = 0; i < dateStep; i++) {
            days.push(
                <div className={`column`} >
                    {renderButtons(day)}
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className={`row__tags-container ${isExpanded ? "row__tags-container--expanded" : ""}`} key={day.getTime()}>
                {days}
            </div>
        );
        days = [];

        return (
            <React.Fragment>
                <div className="days-columns">
                    {rows}
                </div>
            </React.Fragment>
        );
    };

    const renderButtons = (day) => {
        const date = new Date(day);
        const dayOfWeek = format(date, 'EEEE');

        //To tylko mockowe dane, będziecie tutaj sobie mogli wyświtlać kolumny godzin danego 
        //dnia w zaleźności od parametru "day" i tego jak go sobie tam sformatujecie :)

        const timeSlotsByDay = {
            Monday: [
                "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00",
                "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
                "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
            ],
            Tuesday: [
                "-", "-", "-", "-", "-", "-", "-",
                "-", "-", "-", "-", "-", "-", "-",
            ],
            Wednesday: [
                "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00",
                "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
                "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
            ],
            Thursday: [
                "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
                "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
                "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
                "20:30", "21:00"
            ],
            Friday: [
                "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00",
                "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
                "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
            ],
            Saturday: [
                "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00",
                "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
                "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
                "19:30", "20:00", "20:30", "21:00"
            ],
            Sunday: [
                "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
                "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
                "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
                "20:30", "21:00"
            ]
        };


        const timeSlots = timeSlotsByDay[dayOfWeek] || [];

        const buttons = timeSlots.map((label, index) => (
            <Tag
                type={label === "-" ? "not-available" : "primary"}
                key={label}
                text={label}
                linkTo="/appointment-details"></Tag>
        ));

        return (
            <div className={`tags_wrapper ${isExpanded ? "tags_wrapper--expanded" : ""}`}>
                {buttons}
            </div>
        );
    };



    const renderFooter = () => {
        const handleShowMoreHoursClick = () => {
            setIsExpanded(!isExpanded);
        };

        let buttonText;
        if (!isExpanded) {
            buttonText = (
                <React.Fragment>
                    <box-icon name='chevron-down'></box-icon>
                    {t(`show_more_hours`)}
                    <box-icon name='chevron-down'></box-icon>
                </React.Fragment>
            );
        } else {
            buttonText = <React.Fragment>
                <box-icon name='chevron-up' ></box-icon>
                {t(`show_less_hours`)}
                <box-icon name='chevron-up' ></box-icon>
            </React.Fragment>
        }

        return (
            <div className="hour-picker__footer">
                <Divider />
                <Button
                    id={"hour-picker-button"}
                    type={ButtonType.Filled}
                    color={ButtonColor.Gray}
                    shape={ButtonShape.Rounded}
                    text={buttonText}
                    onClick={handleShowMoreHoursClick}
                />
            </div>
        );
    };

    return (
        <div className="hour-picker">
            {renderHeader()}
            <div className="hour-picker__content">
                <div className={`icon icon--prev ${disablePrevButton ? "icon--prev--disabled" : ""}`} onClick={() => changeWeekHandle("prev")} disabled={disablePrevButton}></div>
                <div className="days-wrapper">
                    {renderDays()}
                    {renderCells()}
                </div>
                <div className="icon icon--next" onClick={() => changeWeekHandle("next")} />
            </div>
            {renderFooter()}
        </div>
    );
};

export default HourPicker;