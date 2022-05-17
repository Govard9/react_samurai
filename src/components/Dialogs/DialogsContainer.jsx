import React from "react";
import {
	sendMessageCreator,
	updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

	let sendMessage = () => {
		props.dispatch(sendMessageCreator());
	};

	let updateNewMessageBody = (body) => {
		props.dispatch(updateNewMessageBodyActionCreator(body));
	};

	return ( <Dialogs 
		updateNewMessageBody={updateNewMessageBody}
		sendMessage={sendMessage} 
		dialogPage={props.store.dialogsPage}
		/> );
};

export default DialogsContainer;
