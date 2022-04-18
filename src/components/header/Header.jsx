import style from './Header.module.scss';

function Header() {
	return (
		<header className={style.header}>
			<img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg' />
		</header>
	);
}

export default Header;
