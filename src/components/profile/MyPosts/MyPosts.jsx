import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

	const postElements = props.posts.map( p => <Post message={p.message} like={p.like}/>)
	
	return (
		<div>
			<div className={s.content}>
				<span className={s.myPosts}>
					<p>My post</p>
				</span>
				<div className={s.parent}>
					<textarea placeholder="your news..."/>
					<button>Send</button>
				</div>
				{ postElements }
			</div>
		</div>
	);
}

export default MyPosts;