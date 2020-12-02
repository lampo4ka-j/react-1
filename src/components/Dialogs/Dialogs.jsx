import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";


const Dialogs = () =>{
    return (
        <BrowserRouter>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div  className={s.dialog}>
                    <NavLink to='/dialogs/dima' activeClassName={s.active}> Dima </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/valera' activeClassName={s.active}> Valera </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/sasha' activeClassName={s.active}> Sasha </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/katy' activeClassName={s.active}> Katy </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/masha' activeClassName={s.active}> Masha </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/maks' activeClassName={s.active}> Maks </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/sony' activeClassName={s.active}> Sony </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    gdfghgh
                </div>
                <div className={s.message}>
                    hf df hfd hdfh
                </div>
                <div className={s.message}>
                    S423432  sdf
                </div>
                <div className={s.message}>
                    gdf 43 435 dfs
                </div>
                <div className={s.message}>
                    5
                </div>
                <div className={s.message}>
                    423 rsd f sdf432
                </div>
                <div className={s.message}>
                    fsd423432r
                </div>
            </div>
        </div>
            </BrowserRouter>
    )
}

export default Dialogs;