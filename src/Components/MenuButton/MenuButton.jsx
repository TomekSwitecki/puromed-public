import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
const MenuButton = ({ children, selected, onClick, linkTo }) => {


    const buttonClassName = `menu-button ${selected ? 'menu-button--selected' : ''}`;

    return (
        <Link className={buttonClassName} to={linkTo}>
            {children}
        </Link>
    );
};

export default MenuButton;
