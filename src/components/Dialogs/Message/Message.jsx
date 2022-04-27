import s from "./Message.module.scss";

const Message = (props) => {
	if (props.myMsg == 1) {
		return (
			<div className={`${s.dialog} ${s.left}`}>
				{ props.message }
			</div>
		);
	} else {
		return (
			<div className={`${s.dialog} ${s.right}`}>
				{ props.message }
			</div>
		);
	}
}

export default Message;