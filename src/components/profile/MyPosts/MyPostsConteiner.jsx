import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsConteiner = (props) => {

	let addPost = () => {
		props.dispatch( addPostActionCreator() );
	}

	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	}

	return (
		<MyPosts 
			updateNewPostText={onPostChange} 
			addPost={addPost} 
			posts={props.store.profilePage.posts} 
			newPostText={props.store.profilePage.newPostText} />
	);
}

export default MyPostsConteiner;