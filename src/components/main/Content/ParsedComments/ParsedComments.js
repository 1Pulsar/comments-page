import React from "react";
import {CommentElement} from "../../../common/CommentElement/CommentElement";

export const ParsedComments = ({commentsData, currentTime}) => {
    const parsedComments = commentsData.map(commentItem => {
        const createdTime = Date.parse(commentItem.created_at);
        const deltaTime = currentTime - createdTime;

        const msToTime = (deltaTime) => {
            const days = parseInt(deltaTime / (1000 * 60 * 60 * 24));
            if (days < 1) {
                const hours = parseInt((deltaTime / (1000 * 60 * 60)) % 24);
                if (hours < 1) {
                    const minutes = parseInt((deltaTime / (1000 * 60)) % 60);
                    if (minutes < 1) return "now"
                    return minutes + " minutes ago";
                }
                return hours + " hours ago";
            }
            return days + " days ago";
        };

        const deltaTimeString = msToTime(deltaTime);

        return (
            <CommentElement deltaTimeString={deltaTimeString} name={commentItem.name} text={commentItem.text}
                            key={commentItem.id}/>
        );
    });
    return (
        <>
            {parsedComments}
        </>
    );
};