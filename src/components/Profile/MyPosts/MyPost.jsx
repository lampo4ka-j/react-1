import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/state";


const MyPost = (props) =>{

    let postElements = props.postData.map( p => <Post message={p.message} likeCounts={p.likeCount} /> );

    let newPostElement = React.createRef();

    let addPosts = () => {
        props.dispatch(addPostActionCreator());
    }

    let textChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewTextActionCreator(text));
    }

    return (
        <div>
          <div className={s.mypost}>
              <h3>My post</h3>
              <div>
                <textarea onChange={textChange} ref={newPostElement} value={props.newPostText}/>
              </div>
              <div>
                 <button onClick={addPosts}>Add post</button>
              </div>
          </div>
        <div className={s.posts}>
            {postElements}
        </div>
        </div>


    )
}

export default MyPost;