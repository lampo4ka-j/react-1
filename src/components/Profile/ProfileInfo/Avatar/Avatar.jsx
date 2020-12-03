import React from 'react';
import s from './Avatar.module.css';


const Avatar = () =>{
    return (
        <div>
            <img className={s.img_avatar} src='https://topwar.ru/uploads/posts/2014-07/thumbs/1404711070_art-krasivye-kartinki-putin-politika-1331294.jpeg'></img>
        </div>
    )
}

export default Avatar;