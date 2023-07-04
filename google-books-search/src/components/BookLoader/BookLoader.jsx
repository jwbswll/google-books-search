import React, { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../../services/book-services";
import BookList from "../BookList/BookList";

const BookLoader = ({ searchTerm }) => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setError(null);
		setLoading(true);
		setBooks([]);
		getBooksBySearchTerm(searchTerm)
			.then((bookArr) => {
				console.log(bookArr);
				setBooks(bookArr);
			})
			.catch((e) => {
				setError(e);
			})
			.finally(() => setLoading(false));
	}, [searchTerm]);

	return (
		<>
			{loading && <p>Loading...</p>}
			{!loading && error && <p>{error.message}</p>}
			{!loading && books.length > 0 && <BookList books={books} />}
		</>
	);
};

export default BookLoader;
