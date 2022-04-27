import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.scss";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = props.state.messages.map((m) => (
		<Message message={m.message} myMsg={m.myMsg} />
	));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogH3}>
				<h3>Dialogs</h3>
				<div className={s.dialogsItems}>{dialogsElements}</div>
			</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	);
};

export default Dialogs;
