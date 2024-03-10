
import React, { useState } from 'react';

function Avatar({ name, title }) {

    return (
        <div className="avatar">
            <img className='avatar__img' src="https://puromed.pl/wp-content/uploads/2023/06/mateusz-mokrzys-biopsja-prostaty.jpg" alt="Doctor Photo"></img>
        </div>
    );
}

export default Avatar;
