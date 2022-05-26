import styles from "./users.module.scss";

let Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 0,
				photoUrl:
					"https://www.vippng.com/png/full/136-1364020_this-free-icons-png-design-of-cartoon-man.png",
				followed: false,
				fullName: "Dmitry",
				status: "I am a boss",
				location: { city: "Minsk", country: "Belarus" },
			},
			{
				id: 1,
				photoUrl:
					"https://www.vippng.com/png/full/136-1364020_this-free-icons-png-design-of-cartoon-man.png",
				followed: true,
				fullName: "Sasha",
				status: "qq epta",
				location: { city: "Moscow", country: "Russia" },
			},
			{
				id: 2,
				photoUrl:
					"https://www.vippng.com/png/full/136-1364020_this-free-icons-png-design-of-cartoon-man.png",
				followed: false,
				fullName: "Andrew",
				status: "I am a boss too",
				location: { city: "Kiew", country: "Ukraine" },
			},
		])
	}

	return (
		<div className={styles.main}>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<img
								src={u.photoUrl}
								className={styles.userPhoto}
							/>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}
								>
									{" "}
									Unfollow{" "}
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}
								>
									{" "}
									Follow{" "}
								</button>
							)}
						</div>
					</span>
					<span className={styles.userDescription}>
						<span className={styles.statusFulname}>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
