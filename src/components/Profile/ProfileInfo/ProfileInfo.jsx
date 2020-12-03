import React from 'react';
import s from './ProfileInfo.module.css';
import Avatar from "./Avatar/Avatar";
import ProfileHeader from "./ProfileHeader/ProfileHeader";


const ProfileInfo = () =>{
    return (
        <div>
        <ProfileHeader />
        <Avatar />
      </div>
    )
}

export default ProfileInfo;