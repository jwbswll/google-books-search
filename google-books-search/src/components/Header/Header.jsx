import React from "react";
import style from "./Header.module.scss";

const Header = () => {
	return (
		<header className={style.header}>
			<h1 className={style.heading}>Google Books Search</h1>
			<p className={style.description}>Helping you expand your reading list!</p>
		</header>
	);
};

export default Header;
