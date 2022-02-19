import React from "react";
import style from "./CommentElement.module.css";
import {UserAvatar} from "../UserAvatar/UserAvatar";

export const CommentElement = ({name, text, deltaTimeString}) => {
    const checkName = name.length > 20 ? name.slice(0, 20) + "..." : name;

    return (
        <div className={style.commentElementWrapper}>
            <UserAvatar/>
            <div>
                <div>
                    <p>{checkName}</p>
                    <p>{deltaTimeString}</p>
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
};