import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.scss";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

	let state = props.dialogPage;

	let dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = props.state.messages.map((m) => (
		<Message
			message={m.message}
			myMsg={m.myMsg}
			dispatch={props.dispatch}
		/>
	));

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogH3}>
				<h3>Dialogs</h3>
				<div className={s.dialogsItems}>{dialogsElements}</div>
			</div>
			<div className={s.messages}>{messagesElements}</div>
			<div className={s.content}>
				<textarea
					onChange={onMessageChange}
					placeholder="your message..."
					value={props.state.newMessage}
				/>
				<button onClick={onSendMessageClick}>Add message</button>
			</div>
		</div>
	);
};

export default Dialogs;
