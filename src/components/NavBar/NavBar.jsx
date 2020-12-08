import React, {Fragment} from 'react';
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) =>{

    let friendsElements = props.state.friendsAvaData.map(f => <Friends name={f.name} srcImg={f.srcImg} />);

    return (
    <nav className={s.nav}>
        <div><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
        <div><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
        <div><a href='/#'>Music</a></div>
        <div><a href='/#'>News</a></div>
        <div><a href='/#'>Settings</a></div>
        <div><a href='/#'>Friends</a></div>
        {friendsElements}
    </nav>
    )
}

export default NavBar;