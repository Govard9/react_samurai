import Info from "./MyPosts/Info/Info";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";

function Profile() {
	return (
		<div className={s.content}>
			<div className={s.profileTopImg}>
				<img src="https://bigpicture.ru/wp-content/uploads/2013/03/Panorama03.jpg" />
			</div>
			<Info />
			<MyPosts />
		</div>
	);
}

export default Profile;
