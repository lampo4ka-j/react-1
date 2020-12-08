import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) =>{
    return (
        <div>
            <div  className={s.dialog}>
                <img src={props.img} alt=""/>
                <NavLink to={'/dialogs/' + props.Id} activeClassName={s.active}> {props.Name} </NavLink>
            </div>
        </div>
    )
}

export default Dialog;