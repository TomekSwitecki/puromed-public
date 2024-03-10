import React from 'react';

export const ContentCard = ({ children, className }) => {
    const cardClasses = `content-card ${className || ''}`;

    return (
        <div className={cardClasses}>
            {children}
        </div>
    );
};