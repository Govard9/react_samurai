import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavFriendsContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<NavFriendsContainer store={props.state} dispatch={props.dispatch} />
			<div class="app-wrapper-content">
				<Routes>
					<Route
						path="/dialogs*"
						element={<DialogsContainer store={props.state} dispatch={props.dispatch}
						/>}
					/>
					<Route
						path="/profile"
						element={<Profile store={props.state} dispatch={props.dispatch} />}
					/>
					<Route
						path="/users"
						element={<UsersContainer />}
					/>
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
