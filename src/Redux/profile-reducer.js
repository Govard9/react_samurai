let initialState = {
	posts: [
		{ id: 0, message: "Hi, how are you?", like: 23 },
		{ id: 1, message: "My first post.", like: 4 },
	],
	newPostText: "",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD-POST":
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			};

			state.posts.push(newPost);
			state.newPostText = "";
			return state;
		case "UPDATE_NEW_POST_TEXT":
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });

export const updateNewPostTextActionCreator = (text) => {
	return { type: "UPDATE_NEW_POST_TEXT", newText: text };
};

export default profileReducer;