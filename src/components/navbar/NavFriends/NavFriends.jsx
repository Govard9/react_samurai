import { NavLink } from "react-router-dom";
import s from "./NavFriends.module.scss";

const NavFriends = (props) => {

	return (
		<div className={s.friend}>
			<img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"></img>
			<NavLink className={s.link} to={"/dialogs/" + props.id}>{ props.name }</NavLink>
		</div>
	);
};

export default NavFriends;
