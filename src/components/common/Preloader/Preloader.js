import React from "react";
import standardPreloader from "../../../images/standardPreloader.gif";
import style from "./Preloader.module.css";

export const Preloader = (props) => {

    return <img className={style.preloader} src={standardPreloader} alt='Preloader' />

}