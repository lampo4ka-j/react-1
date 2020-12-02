import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = () =>{
    return (
        <div>
          My post
          <div>
              <textarea name="text" cols="30" rows="10"></textarea>
              <button>Add post</button>
          </div>
        <div className={s.posts}>
          <Post message="Hello Sasha" likeCounts="20" />
          <Post message="hello hello nubic" likeCounts="15" />
        </div>
        </div>


    )
}

export default MyPost;