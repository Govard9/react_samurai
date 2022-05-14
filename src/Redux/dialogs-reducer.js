export const dialogReducer = (state, action) => {
	switch (action.type) {
		case "ADD-MESSAGE":
			let newMessage = {
				id: 10,
				message: state.newMessage,
				myMsg: Math.round(Math.random()),
			};

			state.messages.push(newMessage);
			state.newMessage = "";
			return state;
		case "UPDATE_NEW_MESSAGE_TEXT":
			state.newMessage = action.newText;
			return state;
        default:
            return state;
	}
};


export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});

export const updateNewMessageTextActionCreator = (text) => {
	return {type: 'UPDATE_NEW_MESSAGE_TEXT', newText: text };
}
