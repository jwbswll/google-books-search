import React from "react";
import style from "./Button.module.scss";

const Button = ({ children, onClick, btnStyle }) => {
	return (
		<>
			<button className={style.btn} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;
