
import React from 'react';
import { Navbar } from "../../Components/Navbar/Navbar";

export const SignPage = ({ form, photo }) => {
    return (
        <React.Fragment>
            <Navbar simple />
            <div className="sign__container">
                <div className='sign__form-wrapper'>
                    {form}
                </div>
                <div className='sign__photo-wrapper'>
                    <img src={photo}></img>
                </div>
            </div >
        </React.Fragment>
    );
}