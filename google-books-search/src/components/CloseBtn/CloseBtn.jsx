import React from "react";
import style from "./CloseBtn.module.scss";

const CloseBtn = ({ onClick }) => {
	return (
		<button className={style.close} onClick={onClick}>
			⨉
		</button>
	);
};

export default CloseBtn;
