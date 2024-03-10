
import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import FormRow from "../../Components/Form/FormRow";
import TextInput from '../../Components/TextInput/TextInput';
import { IconAvatarColor } from '../../Components/IconAvatar/IconAvatar';
import Button, { ButtonType, ButtonColor, ButtonShape, ButtonSize } from '../../Components/Button/Button';
import PuromedRegistrationPhoto from "../../Resources/PuromedRegistrationPhoto.png";
import LabeledIcon from '../../Components/LabeledIcon/LabeledIcon';
import { InfoCircle } from '@vectopus/atlas-icons-react';
import { SignPage } from '../../Components/SignPage/SignPage';
import ExtraActions from '../../Components/ExtraActions/ExtraActions';
import { useTranslation } from 'react-i18next';

export const RegistrationForm = () => {

    const { t } = useTranslation();

    const formHeader = (
        <Header
            level={3}
            title={t('sign_up')}
            subtitle={t('enter_your_data')}
        />
    );

    return (
        <Form id="registration" header={formHeader}>
            <FormRow>
                <TextInput label={t('name')} placeholder={t('name_input_placeholder')} />
                <TextInput label={t('surname')} placeholder={t('surname_input_placeholder')} />
            </FormRow>
            <FormRow>
                <TextInput label={t('email')} placeholder={t('email_input_placeholder')} />
            </FormRow>
            <FormRow>
                <TextInput label={t('password')} placeholder={t('password_input_placeholder')} />
            </FormRow>
            <FormRow>
                <TextInput label={t("password_repeat")} placeholder={t('password_repeat_placeholder')} />
            </FormRow>
            <FormRow>
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Primary}
                    shape={ButtonShape.Rounded}
                    text={t("sign_up_action")}
                    submit
                />
            </FormRow>
            <FormRow>
                <ExtraActions label={t("already_have_account")} buttonLabel={t("sign_in_action")} />
            </FormRow>
        </Form>
    );
}
export const Registration = () => {
    return (
        <React.Fragment>
            <SignPage form={<RegistrationForm />} photo={PuromedRegistrationPhoto} />

        </React.Fragment>
    );

}