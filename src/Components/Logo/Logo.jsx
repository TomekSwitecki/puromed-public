import React from 'react';
import SVG from 'react-svg';
import { ReactComponent as PuromedLogo } from "../../Resources/PuromedLogotype.svg";

export const Logo = () => {
    return (
        <a className='logo__container' href='https://puromed.pl'>

            {/* <img className='logo' src={PuromedLogo}></img> */}
            <PuromedLogo />

        </a>
    );
}