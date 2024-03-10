import React from 'react';
import LabeledIcon from '../LabeledIcon/LabeledIcon';
const ContactCard = () => {

    return (
        <div className='contact-card'>
            <LabeledIcon icon={<box-icon name='map' type='solid' ></box-icon>} label={"Ul. Św. Teresy od Dzieciątka Jezus 92/3 91-341 Łódź"} />
            <LabeledIcon icon={<box-icon name='phone' type='solid' ></box-icon>} label={"+48 422 080 100"} />
            <LabeledIcon icon={<box-icon name='envelope' type='solid' ></box-icon>} label={"poradnia@puromed.pl"} />
        </div>

    );
};

export default ContactCard;
