import React, { useState } from 'react';
import Avatar from '../../Avatar/Avatar';

function CardHeader({ name, title }) {

    return (
        <div className="card__header">
            <Avatar />
            <div className='card__header-titles'>
                <h2 className='card__name'>{name}</h2>
                <p className='card__title'>{title}</p>
            </div>

        </div>
    );
}

export default CardHeader;
