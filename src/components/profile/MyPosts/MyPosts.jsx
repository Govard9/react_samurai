import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

	const postElements = props.posts.map( p => <Post message={p.message} like={p.like}/>)
	
	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	}

	return (
		<div>
			<div className={s.content}>
				<span className={s.myPosts}>
					<p>My post</p>
				</span>
				<div className={s.parent}>
					<textarea placeholder="your news..." ref={ newPostElement } />
					<button onClick={ addPost }>Send</button>
				</div>
				{ postElements }
			</div>
		</div>
	);
}

export default MyPosts;