import React from "react";
import style from "./CommentElement.module.css";
import {UserAvatar} from "../UserAvatar/UserAvatar";

export const CommentElement = (props) => {
    return (
        <div className={style.commentElementWrapper}>
            <UserAvatar/>
            <div>
                <div>
                    <p>Staraya Chimchima</p>
                    <p>15 hours ago</p>
                </div>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без</p>
            </div>
        </div>
    )
}