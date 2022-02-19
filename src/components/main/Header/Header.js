import React from "react";
import style from "./Header.module.css";
import commentsSmallIcon from "../../../images/commentsSmallLogo.svg";
import userSmallIcon from "../../../images/userSmallLogo.svg";

export const Header = ({total, name}) => {
    const checkName = name.length > 20 ? name.slice(0, 20) + "..." : name;
    return (
        <div className={style.headerWrapper}>
            <div>
                <img src={commentsSmallIcon} alt="Comments small icon"/>
                <p>{total} comments</p>
            </div>
            <div>
                <img src={userSmallIcon} alt="User small icon"/>
                <p>{checkName}</p>
            </div>
        </div>
    );
};