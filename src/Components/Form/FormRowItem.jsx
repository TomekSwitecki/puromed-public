import React from 'react';

const FormRowItem = ({ children, flexBasis }) => {
    const style = {
        flexBasis: flexBasis ? `${flexBasis}%` : 'auto',
    };

    return (
        <div className='form__row-item' style={style}>
            {children}
        </div>
    );
};

export default FormRowItem;
