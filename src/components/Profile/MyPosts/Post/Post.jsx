import React from 'react';
import s from './Post.module.css';

const Post = (props) =>{
    return (
        <div>
            <div className={s.item}>
                <img src="https://mtdata.ru/u20/photo1C37/20279419936-0/original.jpg" alt=""/>
                {props.message}
                <div>
                    <span>Like</span><span>{props.likeCounts}</span>
                </div>
            </div>
        </div>


    )
}

export default Post;