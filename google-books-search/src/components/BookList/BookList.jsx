import React from "react";
import BookCard from "../BookCard/BookCard";

const BookList = ({ books }) => {
	return (
		<>
			{books.map((book, i) => {
				const { volumeInfo } = book;
				return <BookCard key={i} bookData={volumeInfo} />;
			})}
		</>
	);
};

export default BookList;
