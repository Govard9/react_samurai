import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./user-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;