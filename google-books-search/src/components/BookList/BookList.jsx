import React from "react";
import BookCard from "../BookCard/BookCard";
import style from "./BookList.module.scss";

const BookList = ({ books }) => {
	return (
		<main className={style.main}>
			{books.map((book, i) => {
				return <BookCard key={i} bookData={book} />;
			})}
		</main>
	);
};

export default BookList;
