import s from "./Post.module.scss";

const Post = (props) => {
	return (
		<div>
			<div className={s.item}>
				<img src="https://redmed.ge/assets/photos/avatar-3.png" />
				<div className={s.like}>
					<p className={s.text}>{props.message}</p>
					<span>Like: {props.like}</span>
				</div>
			</div>
		</div>
	);
}

export default Post;