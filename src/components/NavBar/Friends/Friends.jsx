import React from 'react';
import s from "./Frieds.module.css";

const Friends = (props) =>{
    return (
    <div className={s.friends}>
        <div className={s.avatar}>
            <img src={props.srcImg} alt=""/>
            <span>{props.name}</span>
        </div>
    </div>
    )
}

export default Friends;