import { useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import BookLoader from "./components/BookLoader/BookLoader";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchType, setSearchType] = useState("");
	const [error, setError] = useState(null);

	const handleSearch = (searchObj) => {
		setError(null);
		const { searchValue, searchParam } = searchObj;
		console.log(searchObj);
		if (searchValue === "") {
			setError("Please enter search terms");
		} else if (searchParam === "") {
			setError("Please select a search parameter");
		}
		setSearchTerm(searchValue);
		setSearchType(searchParam);
		console.log(searchTerm, searchType);
	};

	return (
		<>
			<SearchInput handleSubmit={handleSearch} />

			{error ? (
				<p>{error}</p>
			) : (
				<BookLoader searchTerm={searchTerm} searchType={searchType} />
			)}
		</>
	);
}

export default App;
