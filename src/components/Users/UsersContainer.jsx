import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/user-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  debugger
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);