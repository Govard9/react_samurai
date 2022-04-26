import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.scss";

const DialogItem = (props) => {
	return (
		<div className={s.dialog + " " + s.active}>
			<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
		</div>
	);
};

export default DialogItem;