import React, { useEffect, useRef, useState } from "react";
import { getBooksBySearchTerm } from "../../services/book-services";
import BookList from "../BookList/BookList";
import { ColorRing } from "react-loader-spinner";
import style from "./BookLoader.module.scss";
import Error from "../Error/Error";
import SearchLabel from "./SearchLabel/SearchLabel";

const BookLoader = ({ searchTerm }) => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const count = useRef(0);

	useEffect(() => {
		setError(null);
		setBooks([]);
		setLoading(true);
		getBooksBySearchTerm(searchTerm)
			.then((bookArr) => {
				setBooks(bookArr);
			})
			.catch((e) => {
				setError(e);
			})
			.finally(() => setLoading(false));
		count.current += 1;
	}, [searchTerm]);

	return (
		<>
			{loading && (
				<div className={style.spinner_container}>
					<ColorRing
						visible={true}
						height="200"
						width="200"
						ariaLabel="blocks-loading"
						wrapperStyle={{}}
						wrapperClass="blocks-wrapper"
						colors={["#6c6cbb", "#8989ed", "#494980", "#8383c0", "#5a5a9c"]}
					/>
				</div>
			)}
			{!loading && error && <Error error={error.message} />}
			{!loading && books && (
				<SearchLabel booksAmount={books.length} searchTerm={searchTerm} />
			)}
			{!loading && books && <BookList books={books} />}
		</>
	);
};

export default BookLoader;
