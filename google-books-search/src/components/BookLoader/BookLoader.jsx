import React, { useEffect, useState } from "react";
import { getBooksbySearchTerm } from "../../services/book-services";
import BookList from "../BookList/BookList";

const BookLoader = ({ searchTerm, searchType }) => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setError(null);
		setLoading(true);
		setBooks([]);
		getBooksbySearchTerm(searchTerm, searchType)
			.then((bookArr) => {
				setBooks([...bookArr]);
			})
			.catch((e) => {
				setError(e);
			})
			.finally(() => setLoading(false));
	}, [searchTerm, searchType]);

	return (
		<>
			{loading && <p>Loading...</p>}
			{!loading && error && <p>{error.message}</p>}
			{!loading && books.length > 0 && <BookList books={books} />}
		</>
	);
};

export default BookLoader;
