import React from 'react';

const FormRow = ({ children, fitContent }) => {
    const rowClass = fitContent ? 'form__row form__row--fit-content' : 'form__row';

    return (
        <div className={rowClass}>
            {children}
        </div>
    );
};

export default FormRow;
