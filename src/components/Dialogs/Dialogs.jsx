import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.scss";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = props.state.messages.map((m) => (
		<Message message={m.message} myMsg={m.myMsg} />
	));

	let newMessageElement = React.createRef();

	let addMessage = () => {
		let text = newMessageElement.current.value;
		alert(text)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogH3}>
				<h3>Dialogs</h3>
				<div className={s.dialogsItems}>{dialogsElements}</div>
			</div>
			<div className={s.messages}>{messagesElements}</div>
			<div>
				<textarea ref={ newMessageElement }></textarea>
				<button onClick={ addMessage }>Add message</button>
			</div>
		</div>
	);
};

export default Dialogs;
