import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts} 
			dispatch={props.dispatch} 
			newPostText={props.profilePage.newPostText} />
		</div>
	);
}

export default Profile;