import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const NavFriendsContainer = connect(mapStateToProps) (Navbar)

export default NavFriendsContainer;