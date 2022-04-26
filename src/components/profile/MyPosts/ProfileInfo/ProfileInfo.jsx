import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
	return (
		<div>
			<div className={s.profileTopImg}>
				<img src="https://bigpicture.ru/wp-content/uploads/2013/03/Panorama03.jpg" />
			</div>
			<div className={s.info}>
				<div className={s.profileMainImg}>
					<img src="https://avatars.hsoubcdn.com/bb1f3454368d11fd3a2abef1cabf2b6d?s=256" />
				</div>
				<div>
					<p className={s.nickName}>Govard</p>
					<div className={s.text}>
						<p>Date of Birth: 2 january</p>
						<p>City: Minsk</p>
						<p>Education: BSU'11</p>
						<p>Web Site: https://it-kamasutra.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;