import React, { useState } from 'react';
import { Page } from '../../Components/Page/Page';
import Header from '../../Components/Header/Header';
import SelectInput from '../../Components/Select/SelectInput';
import Card from '../../Components/Card/Card';
import LabeledIcon from '../../Components/LabeledIcon/LabeledIcon';
import Divider from '../../Components/Divider/Divider';
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import DatePicker from '../../Components/DatePicker/DatePicker';
import { Navbar } from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import HourPicker from '../../Components/HourPicker/HourPicker';
import { useTranslation } from 'react-i18next';
import EmptyPlaceholder from '../../Components/EmptyPlaceholder/EmptyPlaceholder';




const options_specializations = [
    { label: 'Urologia', value: 'Urologia' },
    { label: 'Ortopeda', value: 'Ortopeda' },
];

const options_services = [
    { label: 'Konsultacja urologiczna', value: 'Konsultacja urologiczna' },
    { label: 'Wizyta kontrolna', value: 'Wizyta kontrolna' },
];

const options_doctors = [
    { label: 'Cezary Zydek', value: 'Cezary Zydek' },
    { label: 'Mateusz Kupiec', value: 'Mateusz Kupiec' },
];

const BookApointment = ({ title, subtitle, iconUrl }) => {
    const [visitType, setVisitType] = useState(false);
    const [selectedSpecialization, setSelectedSpecialization] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const { t } = useTranslation();

    const pageTitle = (
        <Header
            title={t('book_appointment')}
            subtitle={t('book_appointment_description')}
            icon={<box-icon name='calendar-check' ></box-icon>}
        />
    );

    const handleVisitTypeChange = (e) => {
        console.log(e);
        setVisitType(e);
        console.log("Selected visit type", e);
    }

    const handleSpecializationChange = (e) => {
        console.log(e);
        setSelectedSpecialization(e);
        console.log("Selected specialization:", e);
    }

    const handleServiceChange = (e) => {
        console.log(e);
        setSelectedService(e);
        console.log("Selected Service:", e);
    }

    const handleDoctorChange = (e) => {
        console.log(e);
        setSelectedDoctor(e);
        console.log("Selected doctor:", e);
    }


    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };


    const mainPart = (
        <div className='content-wrapper'>
            <ToggleButton
                id="toggleButton"
                label={t('localization')}
                checked={visitType}
                button_1_label={t('online')}
                button_2_label={t('stationary')}
                onChange={handleVisitTypeChange}
            />
            <div className='control-group'>
                <SelectInput
                    id={1}
                    label={t('specialization')}
                    placeholder={t('specialization_input_placeholder')}
                    options={options_specializations}
                    onChange={handleSpecializationChange}
                    value={selectedSpecialization}
                />
                <SelectInput
                    id={2}
                    label={t('service')}
                    placeholder={t('service_input_placeholder')}
                    options={options_services}
                    onChange={handleServiceChange}
                    value={selectedService}
                />
                <SelectInput
                    id={3}
                    label={t('doctor')}
                    placeholder={t('doctor_input_placeholder')}
                    options={options_doctors}
                    onChange={handleDoctorChange}
                    value={selectedDoctor}
                />

                <DatePicker id={5} onChange={handleDateChange} value={selectedDate} label={t('from_date')} placeholder={t('from_date')}></DatePicker>

            </div>
            <Divider />
            <div className='cards-container'>
                {/* <EmptyPlaceholder title={t(`no_specialization_selected`)} subtitle={t(`no_specialization_selected_description`)} /> */}
                {/* <EmptyPlaceholder title={t(`no_service_selected`)} subtitle={t(`no_service_selected_description`)} /> */}
                <Banner><Card showPrice selectedService={selectedService} /></Banner>
                <Card showPrice selectedService={selectedService} />
                <Card showPrice selectedService={selectedService} />
                <Card showPrice selectedService={selectedService} />
                <Card showPrice selectedService={selectedService} />
                <Card showPrice selectedService={selectedService} />
                <Card showPrice selectedService={selectedService} />
            </div>
        </div>
    );


    return (
        <React.Fragment>
            <Navbar profileMenu navbarButton />
            <Page id="bookApointment" pageTitle={pageTitle} contactCard mainPart={mainPart} />
        </React.Fragment>
    );
};

export default BookApointment;
