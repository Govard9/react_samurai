import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";

const Profile = (props) => {

	return (
		<div>
			<ProfileInfo />
			<MyPostsConteiner store={props.store} dispatch={props.dispatch} />
		</div>
	);
}

export default Profile;