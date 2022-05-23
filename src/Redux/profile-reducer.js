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
			return {
				...state,
				newPostText: "",
				posts: [...state.posts, { id: 22, message: state.newPostText, like: 12 }]				
			};
		case "UPDATE_NEW_POST_TEXT": 
			return { 
				...state,
				newPostText: action.newText
			};
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });

export const updateNewPostTextActionCreator = (text) => {
	return { type: "UPDATE_NEW_POST_TEXT", newText: text };
};

export default profileReducer;
