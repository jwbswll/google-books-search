import React, { useState } from "react";

const SearchInput = ({ handleSubmit }) => {
	const defaultSearchState = { searchValue: "", searchParam: "" };
	const [search, setSearch] = useState(defaultSearchState);
	const [selectValue, setSelectValue] = useState("");

	const onChange = (e) => {
		setSearch({ ...search, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		const form = document.getElementById("searchForm");
		e.preventDefault();
		handleSubmit(search);
		setSearch(defaultSearchState);
		setSelectValue("default");
		form.reset();
	};

	return (
		<form id="searchForm" onSubmit={onSubmit}>
			<input type="text" name="searchValue" onChange={onChange} />
			<label htmlFor="searchParam">Search By:</label>
			<select name="searchParam" id="searchParam" onChange={onChange}>
				<option value={selectValue}>Select</option>
				<option value="inauthor">Author</option>
				<option value="intitle">Title</option>
			</select>
			<button>Search</button>
		</form>
	);
};

export default SearchInput;
