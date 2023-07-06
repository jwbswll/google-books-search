import React, { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../../services/book-services";
import BookList from "../BookList/BookList";
import { ColorRing } from "react-loader-spinner";
import style from "./BookLoader.module.scss";
import Error from "../Error/Error";
import SearchLabel from "./SearchLabel/SearchLabel";
import MoreInfo from "../MoreInfo/MoreInfo";

const BookLoader = ({ searchTerm }) => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalIndex, setModalIndex] = useState(null);

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
	}, [searchTerm]);

	const toggleShowModal = () => {
		setShowModal(!showModal);
	};

	const changeModalIndex = (index) => {
		setModalIndex(index);
	};

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
			{!loading && books && (
				<BookList
					showModal={toggleShowModal}
					setIndex={changeModalIndex}
					books={books}
				/>
			)}
			{showModal && (
				<MoreInfo
					showModal={toggleShowModal}
					modalBook={{ ...books[modalIndex] }}
				/>
			)}
		</>
	);
};

export default BookLoader;
