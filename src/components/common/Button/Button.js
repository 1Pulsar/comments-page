import React from "react";
import style from "./Button.module.css";

export const Button = ({buttonText, buttonClickFunction}) => {
    return (
        <div onClick={buttonClickFunction} className={style.mainButtonStyle}><span>{buttonText}</span></div>
    );
};