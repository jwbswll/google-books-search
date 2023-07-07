import React, { useState } from "react";
import style from "./SearchInput.module.scss";
import Button from "../Button/Button";

const SearchInput = ({ handleSubmit, placeholder }) => {
	const [search, setSearch] = useState(null);

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e) => {
		const form = document.getElementById("searchForm");
		e.preventDefault();
		handleSubmit(search);
		form.reset();
		setSearch(null);
	};

	return (
		<form className={style.form} id="searchForm" onSubmit={onSubmit}>
			<input
				className={style.input}
				type="text"
				placeholder={placeholder}
				onChange={onChange}
			/>
			<Button>Search</Button>
		</form>
	);
};

export default SearchInput;
