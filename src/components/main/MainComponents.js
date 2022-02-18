import React, {useEffect} from "react";
import style from "./MainComponents.module.css";
import {Header} from "./Header/Header";
import {ModalWindow} from "../common/ModalWindow/ModalWindow";
import {Content} from "./Content/Content";

export const MainComponents = (props) => {
    useEffect( () => {

    },[])
    return (
        <div className={style.mainComponentWrapper}>
            <Header/>
            <Content />
            <ModalWindow />
        </div>
    )
}