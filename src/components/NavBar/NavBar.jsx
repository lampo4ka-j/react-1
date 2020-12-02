import React from 'react';
import './NavBar.module.css';
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () =>{
    return (
    <nav className={s.nav}>
        <div><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
        <div><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
        <div><a href='/#'>Music</a></div>
        <div><a href='/#'>News</a></div>
        <div><a href='/#'>Settings</a></div>
    </nav>
    )
}

export default NavBar;