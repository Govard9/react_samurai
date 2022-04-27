import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.scss";

const DialogItem = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.img}>
				<img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"></img>
			</div>
			<div className={s.link}>
				<NavLink className={s.navLink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
			</div>
		</div>
	);
};

export default DialogItem;
