import React, {useState} from "react";
import {Button} from "../../common/Button/Button";
import {closeModalWindow, setNameAC} from "../../../reducers/commentsPageReducer";
import style from "./ModalWindowChildren.module.css";

export const ModalWindowChildren = ({dispatch}) => {
    const [localName, toggleLocalName] = useState('');
    const nameInputHandler = (event) => {
        toggleLocalName(event.target.value);
    };

    const sendButtonHandler = () => {
        const trimmedName = localName.trim();
        if (trimmedName && trimmedName.length > 3 && trimmedName.length < 30) {
            dispatch(setNameAC(trimmedName));
            dispatch(closeModalWindow());
        } else {
            alert('User name is not valid');
        }
    };

    return (
        <div className={style.modalWindowChildrenWrapper}>
            <p>Please, enter your name</p>
            <input className={style.nameInput} value={localName} onChange={nameInputHandler} placeholder={'Your name'}/>
            <Button buttonText={'Send'} buttonClickFunction={sendButtonHandler}/>
        </div>
    );
};