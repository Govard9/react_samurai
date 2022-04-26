import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts post={props.post} />
		</div>
	);
}

export default Profile;