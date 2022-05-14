import { dialogReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state);
	}	
};

export default store;
