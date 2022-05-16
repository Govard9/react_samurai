import React from "react";
import {
	sendMessageCreator,
	updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

	let state = props.store.getState().dialogPage;

	let onSendMessageClick = () => {
		props.dispatch(sendMessageCreator());
	};

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyActionCreator(body));
	};

	return ( <Dialogs 
		updateNewMessageBody={onNewMessageChange}
		sendMessage={onSendMessageClick} 
		dialogPage={state}
		/> );
};

export default DialogsContainer;
