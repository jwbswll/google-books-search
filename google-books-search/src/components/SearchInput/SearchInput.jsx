import React, { useState } from "react";

const SearchInput = ({ handleSubmit }) => {
	const [search, setSearch] = useState("");

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e) => {
		const form = document.getElementById("searchForm");
		e.preventDefault();
		handleSubmit(search);
		setSearch("");
		form.reset();
	};

	return (
		<form id="searchForm" onSubmit={onSubmit}>
			<input type="text" onChange={onChange} />
			<button>Search</button>
		</form>
	);
};

export default SearchInput;
