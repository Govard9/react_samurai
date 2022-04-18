import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
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
				<Post message='Hi, how are you?' like='23'/>
				<Post message='My first post.' like='4'/>
			</div>
		</div>
	);
}

export default MyPosts;
