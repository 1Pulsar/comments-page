import React from "react";
import style from "./ModalWindow.module.css"

export const ModalWindow = ({children, modalWindowIsActive}) => {

    const modalWrapper = modalWindowIsActive ? `${style.modalWrapper} ${style.active}` : style.modalWrapper;
    const modalWindow = modalWindowIsActive ? `${style.modalWindow} ${style.active}` : style.modalWindow;

    return (
        <div className={modalWrapper}>
            <div className={modalWindow} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};