import React, { useState } from 'react';
import { Page } from '../../Components/Page/Page';
import Header from '../../Components/Header/Header';
import SelectInput from '../../Components/Select/SelectInput';
import Form from '../../Components/Form/Form';
import FormRow from "../../Components/Form/FormRow";
import TextInput from '../../Components/TextInput/TextInput';
import FormRowItem from '../../Components/Form/FormRowItem';
import SidebarMenu from '../../Components/SiderbarMenu/SidebarMenu';
import Button, { ButtonType, ButtonColor, ButtonShape, ButtonSize } from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import DatePicker from '../../Components/DatePicker/DatePicker';
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import Divider from '../../Components/Divider/Divider';
import { InfoCircle, Park } from '@vectopus/atlas-icons-react';
import LabeledIcon from '../../Components/LabeledIcon/LabeledIcon';
import { IconAvatarColor } from '../../Components/IconAvatar/IconAvatar';
import CardHeader from '../../Components/Card/CardHeader/CardHeader';
import { ContentCard } from '../../Components/ContentCard/ContentCard';
import Tag from '../../Components/Tag/Tag';
import DateTagSelect from '../../Components/DateTagSelect/DateTagSelect';
import ExtraActions from '../../Components/ExtraActions/ExtraActions';
import BigIcon from '../../Components/BigIcon/BigIcon';
import { ReactComponent as Dojazd } from '../../Resources/dojazd.svg';
import { ReactComponent as Udogodnienia } from '../../Resources/udogodnienia.svg';
import { ReactComponent as Parking } from '../../Resources/parking.svg';
import { useTranslation } from 'react-i18next';





const FormPrepend = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <ExtraActions linkTo={"/login"} fitContent label={t(`already_have_account`)} buttonLabel={t(`sign_in`)} sublabel={t(`continue_as_guest`)} />
        </React.Fragment>
    );
}

const options = [
    { label: 'Konsultacja urologiczna', value: 'Konsultacja urologiczna' },
    { label: 'Konsultacja urologiczna', value: 'Konsultacja urologiczna' },
];


const AppointmentDetails = ({ }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const [changePassword, setChangePassword] = useState(false);
    const [termsOfUse, setTermsOfUse] = useState(false);
    const [saveData, setSaveData] = useState(false);
    const [hasPesel, setHasPesel] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChangePassword = () => {
        setChangePassword(!changePassword);
    }
    const handleChangeTermsOfUse = () => {
        setTermsOfUse(!termsOfUse);
    }
    const handleChangeSaveData = () => {
        setSaveData(!saveData);
    }
    const handleChangeHasPesel = () => {
        setHasPesel(!hasPesel);
    }


    const pageTitle = (
        <Header
            level={1}
            title={t(`appointment_details`)}
            subtitle={t(`appointment_details_description`)}
            icon={<box-icon name='calendar'></box-icon>}

        />
    );

    const formHeader = (
        <Header
            level={3}
            title={t(`appointment_details`)}
            subtitle={t(`appointment_details_description`)}
        />
    );


    const Sidebar = () => (
        <iframe
            className='map_container'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4149.139326229852!2d19.42346990675801!3d51.80446122374608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb47d1cfaf0b%3A0xa48ddc934e77ab3e!2sPUROMED%20Poradnia%20Lekarzy%20Specjalist%C3%B3w!5e0!3m2!1spl!2spl!4v1696438821883!5m2!1spl!2spl"
            width="448"
            height="627"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const mainPart = (
        <React.Fragment>
            <div className='content-wrapper'>
                <div className='control-group'>
                    <ContentCard className={"details-card"}>
                        <CardHeader name={"Cezary Zydek"} title={"lekarz w trakcie specjalizacji, urolog"} standalone />
                    </ContentCard>
                    <ContentCard className={"details-card"}>
                        <SelectInput id="#" options={options} disabled={true} append={<Tag type="tertiary" text="100zł" />} />
                    </ContentCard>
                    <ContentCard className={"details-card"}>
                        <DateTagSelect scheduledVisit date={"13-12-2001"} />
                    </ContentCard>
                </div>
                <Divider />
                <div className='main-container'>
                    <Form
                        header={formHeader}
                        prepend={<FormPrepend />}
                    >
                        <FormRow>
                            <TextInput label={t(`name`)} placeholder={t(`name_input_placeholder`)} required />
                            <TextInput label={t(`surname`)} placeholder={t(`surname_input_placeholder`)} required />
                        </FormRow>
                        <FormRow>
                            <TextInput label={t(`phone`)} placeholder={t(`phone_input_placeholder`)} required />
                            <TextInput label={t(`email`)} placeholder={t(`email_input_placeholder`)} />
                        </FormRow>
                        {hasPesel && <FormRow>
                            <TextInput label={t(`pesel`)} placeholder={t(`pesel_input_placeholder`)} required />
                        </FormRow>}
                        {!hasPesel && <FormRow>
                            <DatePicker value={selectedDate} onChange={handleDateChange} id={5} label={t(`date_of_birth`)} placeholder={t(`date_of_birth_placeholder`)} required></DatePicker>
                        </FormRow>}
                        <FormRow>
                            <Checkbox label={t(`dont_have_pesel`)} value={!hasPesel} onChange={handleChangeHasPesel} />
                        </FormRow>
                        <FormRow>
                            <FormRowItem flexBasis={60}>
                                <TextInput label={t(`street`)} placeholder={t(`street_input_placeholder`)} />
                            </FormRowItem>
                            <FormRowItem flexBasis={30}>
                                <TextInput label={t(`home`)} placeholder={t(`home_input_placeholder`)} />
                            </FormRowItem>
                            <FormRowItem flexBasis={10}>
                                <TextInput label={t(`apartment`)} placeholder={t(`apartment_input_placeholder`)} />
                            </FormRowItem>
                        </FormRow>
                        <FormRow>
                            <FormRowItem>
                                <TextInput label={t(`postal_code`)} placeholder={t(`postal_code_input_placeholder`)} />
                            </FormRowItem>
                            <FormRowItem flexBasis={75}>
                                <TextInput label={t(`city`)} placeholder={t(`city_input_placeholder`)} />
                            </FormRowItem>
                        </FormRow>
                        <FormRow>
                            <Checkbox primary label={t(`create_account`)} value={changePassword} onChange={handleChangePassword} />
                        </FormRow>
                        {changePassword &&
                            <FormRow>
                                <TextInput label={t(`change_password`)} placeholder={t(`password_input_placeholder`)} />
                            </FormRow>}
                        {changePassword &&
                            <FormRow>
                                <TextInput label={t(`password_repeat`)} placeholder={t(`password_repeat_placeholder`)} />
                            </FormRow>}
                        <FormRow fitContent>
                            <Checkbox label={t(`accept_terms_of_use`)} value={termsOfUse} onChange={handleChangeTermsOfUse} />
                            <Checkbox label={t(`save_my_data`)} value={saveData} onChange={handleChangeSaveData} />
                        </FormRow>

                        <Button
                            type={ButtonType.Filled}
                            color={ButtonColor.Primary}
                            shape={ButtonShape.Pill}
                            text={t(`book_appointment`)}
                            submit
                        />
                    </Form>
                    <div className='sidebar__container'>
                        <Sidebar />
                        <div className='big-icons__container'>
                            <BigIcon icon={<Dojazd />} label={t(`easy_commute`)} />
                            <BigIcon icon={<Parking />} label={t(`big_parking`)} />
                            <BigIcon icon={<Udogodnienia />} label={t(`facilities`)} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );

    return (
        <React.Fragment>
            <Navbar profileMenu navbarButton currentPath={location.pathname} />
            <Page id="apointmentDetails" pageTitle={pageTitle} mainPart={mainPart} contactCard />
            <Footer />
        </React.Fragment>
    );
};

export default AppointmentDetails;
