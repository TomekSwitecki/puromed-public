
import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import FormRow from "../../Components/Form/FormRow";
import TextInput from '../../Components/TextInput/TextInput';
import { IconAvatarColor } from '../../Components/IconAvatar/IconAvatar';
import Button, { ButtonType, ButtonColor, ButtonShape, ButtonSize } from '../../Components/Button/Button';
import PuromedLoginPhoto from "../../Resources/PuromedLoginPhoto.png";
import LabeledIcon from '../../Components/LabeledIcon/LabeledIcon';
import { InfoCircle } from '@vectopus/atlas-icons-react';
import { SignPage } from '../../Components/SignPage/SignPage';
import ExtraActions from '../../Components/ExtraActions/ExtraActions';

import { useTranslation } from 'react-i18next';




export const LoginForm = () => {
    const { t } = useTranslation();

    const formHeader = (
        <Header
            level={3}
            title={t('sign_in')}
            subtitle={t('enter_your_data')}
        />
    );

    return (
        <Form id="login" header={formHeader}>
            <FormRow>
                <TextInput label={t('email')} placeholder={t('email_input_placeholder')} />
            </FormRow>
            <FormRow>
                <TextInput label={t('password')} placeholder={t('password_input_placeholder')} />
            </FormRow>
            <FormRow>
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Primary}
                    shape={ButtonShape.Rounded}
                    text={t('sign_in_action')}
                    submit
                />
            </FormRow>
            <FormRow>
                <ExtraActions label={t('dont_have_account')} buttonLabel={t('sign_up_action')} />
            </FormRow>
        </Form>
    );
}
export const Login = () => {
    return (
        <React.Fragment>
            <SignPage form={<LoginForm />} photo={PuromedLoginPhoto} />

        </React.Fragment>
    );

}