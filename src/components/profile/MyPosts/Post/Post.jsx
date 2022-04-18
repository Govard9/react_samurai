import s from "./Post.module.scss";

function Post() {
	return (
		<div>
			<div className={s.item}>
				<img src="https://redmed.ge/assets/photos/avatar-3.png" />
				<div className={s.like}>
					<p className={s.text}>Hello mother fucker!</p>
					<span>Like</span>
				</div>
			</div>
		</div>
	);
}

export default Post;
