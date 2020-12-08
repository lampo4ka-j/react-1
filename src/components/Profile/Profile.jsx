import React from 'react';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) =>{


    return (
        <div>
            <ProfileInfo />
            <MyPost newPostText={props.state.newPostText} dispatch={props.dispatch} postData={props.state.postData} />
      </div>
    )
}

export default Profile;