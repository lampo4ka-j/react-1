import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";


const Profile = () =>{
    return (
        <div>
        <img className={s.img_header} src='https://fund4.biz/wp-content/uploads/2018/12/1-min.png'></img>
        <div>
          <img className={s.img_avatar} src='https://topwar.ru/uploads/posts/2014-07/thumbs/1404711070_art-krasivye-kartinki-putin-politika-1331294.jpeg'></img>
        </div>
        <MyPost />
      </div>
    )
}

export default Profile;