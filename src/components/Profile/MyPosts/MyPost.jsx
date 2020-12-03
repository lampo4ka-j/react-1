import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = (props) =>{

    let postElements = props.postData.map( p => <Post message={p.message} likeCounts={p.likeCount} /> );

    return (
        <div>
          <div className={s.mypost}>
              <h3>My post</h3>
              <div>
                <textarea name="text" cols="30" rows="10"></textarea>
              </div>
              <div>
                 <button>Add post</button>
              </div>
          </div>
        <div className={s.posts}>
            {postElements}
        </div>
        </div>


    )
}

export default MyPost;