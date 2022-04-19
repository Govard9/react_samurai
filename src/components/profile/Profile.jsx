import Info from "./MyPosts/Info/Info";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";

const Profile = () => {
	return (
		<div>
			<div className={s.profileTopImg}>
				<img src="https://bigpicture.ru/wp-content/uploads/2013/03/Panorama03.jpg" />
			</div>
			<Info />
			<MyPosts />
		</div>
	);
}

export default Profile;
