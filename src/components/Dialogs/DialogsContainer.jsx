import { connect } from "react-redux";
import {
	sendMessageCreator,
	updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyActionCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;