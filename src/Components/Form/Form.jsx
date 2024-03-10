import React from 'react';

const Form = ({ id, prepend, header, children, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <form id={id} className='form' onSubmit={handleSubmit}>
            {prepend}
            {header}
            {children}

        </form>
    );
};

export default Form;
