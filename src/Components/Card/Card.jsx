import React, { useState } from 'react';
import CardHeader from './CardHeader/CardHeader';
import SelectInput from '../Select/SelectInput';
import Tag from '../Tag/Tag';
import DateTagSelect from '../DateTagSelect/DateTagSelect';
function Card({ name, title, selectedService, showPrice, pastVisit, scheduledVisit }) {


    return (
        <div className="card">
            <CardHeader name={"Cezary Zydek"} title={"lekarz w trakcie specjalizacji, urolog"} />
            <SelectInput value={selectedService} id="#" disabled={true} append={showPrice && <Tag type="tertiary" text="100zł" />} />
            <DateTagSelect date={"13-12-2001"} pastVisit={pastVisit} scheduledVisit={scheduledVisit} />
        </div>
    );
}

export default Card;
