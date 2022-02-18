import React from "react";
import style from "./Header.module.css";
import commentsSmallIcon from "../../../images/commentsSmallLogo.svg";
import userSmallIcon from "../../../images/userSmallLogo.svg"

export const Header = (props) => {
    return (
        <div className={style.headerWrapper}>
            <div>
                <img src={commentsSmallIcon} alt="Comments small icon"/>
                <p>100 comments</p>
            </div>
            <div>
                <img src={userSmallIcon} alt="User small icon"/>
                <p>UserName</p>
            </div>
        </div>
    );
};