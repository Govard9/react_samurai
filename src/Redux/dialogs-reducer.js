let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_NEW_MESSAGE_TEXT": 
			return { 
				...state,
				newMessage: action.newText
			};
		case "ADD-MESSAGE": {
			let body = state.newMessage;
			return {
				...state,
				newMessage: "",
				messages: [...state.messages, {id: 10, message: body, myMsg: 1}]
			};
		}
		default:
			return state;
	}
};

export const sendMessageCreator = () => ({ type: "ADD-MESSAGE" });

export const updateNewMessageBodyActionCreator = (text) => {
	return { type: "UPDATE_NEW_MESSAGE_TEXT", newText: text };
};

export default dialogReducer;
