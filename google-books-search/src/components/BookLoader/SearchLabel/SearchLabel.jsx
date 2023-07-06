import React from "react";
import style from "./SearchLabel.module.scss";

const SearchLabel = ({ searchTerm, booksAmount }) => {
	return (
		<div className={style.label_container}>
			<p>
				{booksAmount} Results for "{searchTerm}"
			</p>
		</div>
	);
};

export default SearchLabel;
