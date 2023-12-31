import React from "react";
import style from "./Error.module.scss";

const Error = ({ error }) => {
	return (
		<article className={style.error_container}>
			<div className={style.error}>
				<p>{error}</p>
			</div>
		</article>
	);
};

export default Error;
