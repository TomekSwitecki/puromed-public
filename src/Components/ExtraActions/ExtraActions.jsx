import React, { useState } from 'react';
import LabeledIcon from '../LabeledIcon/LabeledIcon';
import { InfoCircle } from '@vectopus/atlas-icons-react';
import Button, { ButtonType, ButtonColor, ButtonShape, ButtonSize } from '../../Components/Button/Button';
import { IconAvatarColor } from '../../Components/IconAvatar/IconAvatar';
import FormRow from '../Form/FormRow';
import Label from '../Label/Label';
const ExtraActions = ({ label, buttonLabel, sublabel, fitContent, linkTo }) => {
    return (
        <div className='extra_action--wrapper'>
            <FormRow fitContent={fitContent}>
                <LabeledIcon color={IconAvatarColor.Positive} icon={<InfoCircle size={24} />} label={label} />
                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    size={ButtonSize.Compact}
                    text={buttonLabel}
                    submit
                    linkTo={linkTo}
                />
            </FormRow>
            {sublabel && <Label>{sublabel}</Label>}
        </div>
    );
}

export default ExtraActions;