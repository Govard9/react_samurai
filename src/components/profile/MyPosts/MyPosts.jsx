import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

function MyPosts() {
	return (
		<div>
			<div className={s.content}>
				<span className={s.myPosts}>
					<p>My post</p>
				</span>
				<div className={s.parent}>
					<textarea></textarea>
					<button>Add post</button>
				</div>
				<Post />
			</div>
		</div>
	);
}

export default MyPosts;
