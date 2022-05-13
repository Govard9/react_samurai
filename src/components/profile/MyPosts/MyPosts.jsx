import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {

	const postElements = props.posts.map( p => <Post message={p.message} like={p.like}/>)
	
	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch( addPostActionCreator() );
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	}

	return (
		<div>
			<div className={s.content}>
				<span className={s.myPosts}>
					<p>My post</p>
				</span>
				<div className={s.parent}>
					<textarea 
					onChange={onPostChange}
					placeholder="your news..." 
					ref={ newPostElement } 
					value={props.newPostText} />
					<button onClick={ addPost }>Send</button>
				</div>
				{ postElements }
			</div>
		</div>
	);
}

export default MyPosts;