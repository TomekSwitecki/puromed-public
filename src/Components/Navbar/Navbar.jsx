import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../Components/Logo/Logo";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useLocation } from 'react-router-dom';
import Button, { ButtonType, ButtonColor, ButtonShape, ButtonSize } from '../../Components/Button/Button';


import en from "../../Resources/en.png";
import pl from "../../Resources/pl.png";

import { useTranslation } from 'react-i18next';
import LanguageSelector from "../LanguageSelector/LanguageSelector";


export const NavbarButton = () => {

    const { t } = useTranslation();
    const location = useLocation();
    console.log(location.pathname)
    if (location.pathname !== "/booking") {
        return (
            <Button
                id={"navbar-button"}
                size={ButtonSize.Default}
                type={ButtonType.Filled}
                color={ButtonColor.Default}
                shape={ButtonShape.Pill}
                text={t('book_appointment')}
                linkTo={"/booking"}
            />
        );
    } else {
        return (
            <Button
                id={"navbar-button"}
                type={ButtonType.Filled}
                color={ButtonColor.Black}
                shape={ButtonShape.Pill}
                text={t('book_appointment')}
            />);
    }
}

export const SignUpButtons = () => {
    const location = useLocation();
    const { t } = useTranslation();
    return (
        <div className="auth-buttons-container">
            <Button
                id={"sign-in-button"}
                size={ButtonSize.Compact}
                type={ButtonType.Outlined}
                color={ButtonColor.Default}
                shape={ButtonShape.Pill}
                text={t('sign_in')}
                linkTo={"/login"}
            />
            <Button
                id={"register-button"}
                size={ButtonSize.Compact}
                type={ButtonType.Filled}
                color={ButtonColor.Primary}
                shape={ButtonShape.Pill}
                text={t('sign_up')}
                linkTo={"/registration"}
            />
        </div>
    );


}


export function Navbar({ profileMenu, navbarButton, simple }) {
    //simple used for auth pages - signup/signin
    const loggedIn = true;
    if (!simple) {
        return (
            <React.Fragment>
                <nav className="navbar">
                    <div className="navbar__content">
                        <Logo />
                        {(loggedIn && navbarButton) && <NavbarButton />}
                        {!loggedIn && <SignUpButtons />}
                        {(profileMenu && loggedIn) && <ProfileMenu />}
                        <LanguageSelector id={"navbar_language_selector"} />
                    </div>

                </nav>
                <nav className="navbar--mobile">
                    <div className="navbar__content">
                        <Logo />
                        <div className="navbar__buttons">
                            {(loggedIn && navbarButton) && <NavbarButton />}
                            {!loggedIn && <SignUpButtons />}
                            {(loggedIn && profileMenu) && <ProfileMenu />}
                        </div>
                        <LanguageSelector id={"navbar_language_selector"} />
                    </div>
                </nav>
            </React.Fragment>
        );
    }
    else {
        return (
            <nav className="navbar navbar--simple">
                <div className="navbar__content">
                    <Logo />
                    <LanguageSelector id={"simple_navbar_language_selector"} />
                </div>

            </nav>
        )
    }

}
