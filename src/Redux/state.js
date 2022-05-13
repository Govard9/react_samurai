let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 0, message: "Hi, how are you?", like: 23 },
				{ id: 1, message: "My first post.", like: 4 },
			],
			newPostText: "",
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: "Dimych" },
				{ id: 2, name: "Andrey" },
				{ id: 3, name: "Sveta" },
				{ id: 4, name: "Sasha" },
				{ id: 5, name: "Viktor" },
				{ id: 6, name: "Valery" },
			],
			messages: [
				{ id: 1, message: "Hi", myMsg: 1 },
				{ id: 2, message: "How are you?", myMsg: 0 },
				{ id: 3, message: "qq", myMsg: 1 },
				{ id: 4, message: "Try hard", myMsg: 0 },
				{ id: 5, message: "Hello my friend", myMsg: 1 },
				{ id: 6, message: "Good idea!", myMsg: 0 },
			],
			newMessage: "",
			friends: [
				{ id: 2, name: "Andrey" },
				{ id: 4, name: "Sasha" },
				{ id: 3, name: "Sveta" },
			],
		},
	},
	_callSubscriber() {
		console.log("State changed");
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === "ADD-POST") {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state);
		} else if (action.type === "UPDATE_NEW_POST_TEXT") {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}

		if (action.type === "ADD-MESSAGE") {
			let newMessage = {
				id: 10,
				message: this._state.dialogsPage.newMessage,
				myMsg: Math.round(Math.random()),
			};

			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessage = "";
			this._callSubscriber(this._state);
		} else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
			this._state.dialogsPage.newMessage = action.newText;
			this._callSubscriber(this._state);
		}
	},
};

export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const updateNewPostTextActionCreator = (text) => {
	return {type: 'UPDATE_NEW_POST_TEXT', newText: text };
}


export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});

export const updateNewMessageTextActionCreator = (text) => {
	return {type: 'UPDATE_NEW_MESSAGE_TEXT', newText: text };
}

export default store;
