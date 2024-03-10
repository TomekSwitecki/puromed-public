import React from "react";
import ContactCard from "../ContactCard/ContactCard";

export function Page({ id, pageTitle, contactCard, mainPart, sidebarMenu }) {
    return (
        <div id={id} className={"page__container"}>
            <div className="page__header">
                <span className={"page__title"}>{pageTitle}</span>
                {contactCard && <ContactCard />}
            </div>
            <div className={"page__embedded-content"}>
                <div className={"page__embedded-content--main"}>
                    {mainPart}
                </div>
                {sidebarMenu && <div className={"page__embedded-content--sidebar"}>
                    {sidebarMenu}
                </div>}
            </div>
        </div>
    );
}
