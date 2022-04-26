import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";

const DialogItem = (props) => {
	return (
		<div className={s.dialog + " " + s.active}>
			<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
	const dialogs = [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Andrey" },
		{ id: 3, name: "Sveta" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Viktor" },
		{ id: 6, name: "Valery" },
	];

	const message = [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "qq" },
	];

	let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

	let messagesElements = message.map( m => <Message message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{ dialogsElements }
			</div>
			<div className={s.messages}>
				{ messagesElements }
			</div>
		</div>
	);
};

export default Dialogs;
