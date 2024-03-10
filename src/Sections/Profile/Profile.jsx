import React, { useState } from 'react';
import { Page } from '../../Components/Page/Page';
import Header from '../../Components/Header/Header';
import SelectInput from '../../Components/Select/SelectInput';
import Form from '../../Components/Form/Form';
import FormRow from "../../Components/Form/FormRow";
import TextInput from '../../Components/TextInput/TextInput';
import FormRowItem from '../../Components/Form/FormRowItem';
import SidebarMenu from '../../Components/SiderbarMenu/SidebarMenu';
import Button, { ButtonType, ButtonColor, ButtonShape } from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DatePicker from '../../Components/DatePicker/DatePicker';




const Profile = ({ }) => {
    const location = useLocation();
    const [changePassword, setChangePassword] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const { t } = useTranslation();
    const handleChangePassword = () => {
        setChangePassword(!changePassword);
    }

    const pageTitle = (
        <Header
            title={t(`patient_profile`)}
            subtitle={""}
            icon={<box-icon name='user-circle' ></box-icon>}
        />
    );

    const formHeader = (
        <Header
            level={3}
            title={t(`patient_data`)}
            subtitle={t(`patient_data_description`)}

        />
    );

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const mainPart = (
        <Form header={formHeader}>
            <FormRow>
                <TextInput label={t(`name`)} placeholder={t(`name_input_placeholder`)} />
                <TextInput label={t(`surname`)} placeholder={t(`surname_input_placeholder`)} />
            </FormRow>
            <FormRow>
                <TextInput label={t(`phone`)} placeholder={t(`phone_input_placeholder`)} />
                <TextInput label={t(`email`)} placeholder={t(`email_input_placeholder`)} />
            </FormRow>
            <FormRow>
                <TextInput label={t(`pesel`)} placeholder={t(`pesel_input_placeholder`)} />
            </FormRow>
            <FormRow>
                <DatePicker value={selectedDate} onChange={handleDateChange} id={5} label={t(`date_of_birth`)} placeholder={t(`date_of_birth_placeholder`)}></DatePicker>
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
                <Checkbox label={t(`change_password`)} value={changePassword} onChange={handleChangePassword} />

            </FormRow>
            {changePassword &&
                <FormRow>
                    <TextInput label={t(`change_password`)} placeholder={t(`password_input_placeholder`)} />
                </FormRow>}
            {changePassword &&
                <FormRow>
                    <TextInput label={t(`password_repeat`)} placeholder={t(`password_repeat_placeholder`)} />
                </FormRow>}
            <Button
                type={ButtonType.Filled}
                color={ButtonColor.Primary}
                shape={ButtonShape.Pill}
                text={t(`submit_changes`)}
                submit
            />
        </Form>
    );

    return (
        <React.Fragment>
            <Navbar profileMenu navbarButton currentPath={location.pathname} />
            <Page id="profile" pageTitle={pageTitle} mainPart={mainPart} sidebarMenu={<SidebarMenu currentPath={location.pathname} />} />
            <Footer />
        </React.Fragment>
    );
};

export default Profile;
