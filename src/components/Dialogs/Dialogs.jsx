import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.scss";
import Message from "./Message/Message";
import React from "react";
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {

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

	let newMessageElement = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	};

	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		let action = updateNewMessageTextActionCreator(text);
		props.dispatch(action);
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
					ref={newMessageElement}
					value={props.state.newMessage}
				/>
				<button onClick={addMessage}>Add message</button>
			</div>
		</div>
	);
};

export default Dialogs;
