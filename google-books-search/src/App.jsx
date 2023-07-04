import { useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import BookLoader from "./components/BookLoader/BookLoader";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [error, setError] = useState(null);

	const handleSearch = (searchValue) => {
		setError(null);
		if (searchValue === "") {
			setError("Please enter search terms");
		}
		setSearchTerm(searchValue);
	};

	return (
		<>
			<SearchInput handleSubmit={handleSearch} />

			{error ? <p>{error}</p> : <BookLoader searchTerm={searchTerm} />}
		</>
	);
}

export default App;
