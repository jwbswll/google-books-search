import { useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import BookLoader from "./components/BookLoader/BookLoader";
import Header from "./components/Header/Header";
import "./index.scss";
import Error from "./components/Error/Error";

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
		<main>
			<Header />
			<SearchInput handleSubmit={handleSearch} placeholder="Search for books" />

			{error ? <Error error={error} /> : <BookLoader searchTerm={searchTerm} />}
		</main>
	);
}

export default App;
