let state = {
	profilePage: {
		posts: [
			{ id: 0, message: "Hi, how are you?", like: 23 },
			{ id: 1, message: "My first post.", like: 4 },
		],
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
			{ id: 1, message: "Hi", myMsg: 1},
			{ id: 2, message: "How are you?", myMsg: 0},
			{ id: 3, message: "qq", myMsg: 1},
			{ id: 4, message: "Try hard", myMsg: 0},
			{ id: 5, message: "Hello my friend", myMsg: 1},
			{ id: 6, message: "Good idea!", myMsg: 0},
		],
		friends: [
			{ id: 2, name: "Andrey" },
            { id: 4, name: "Sasha" },
			{ id: 3, name: "Sveta" },
		],
	},
};

export default state;