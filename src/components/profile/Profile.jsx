import Info from "./MyPosts/Info/Info";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";

const Profile = () => {
	return (
		<div>
			<Info />
			<MyPosts />
		</div>
	);
}

export default Profile;