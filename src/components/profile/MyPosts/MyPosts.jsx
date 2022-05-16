import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

	const postElements = props.posts.map( p => <Post message={p.message} like={p.like}/>)
	
	let newPostElement = React.createRef();

	let onAddPost = () => {
		// props.dispatch( addPostActionCreator() );
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		// let action = updateNewPostTextActionCreator(text);
		// props.dispatch(action);
		props.updateNewPostText(text);
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
					<button onClick={ onAddPost }>Send</button>
				</div>
				{ postElements }
			</div>
		</div>
	);
}

export default MyPosts;