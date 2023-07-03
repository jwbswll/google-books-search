import React from "react";

const BookCard = ({ bookData }) => {
	const { title, authors, imageLinks, description } = bookData;
	const { thumbnail } = imageLinks;

	let authorStr = "";
	if (authors.length > 1) {
		authorStr = authors.join(", ");
	} else {
		authorStr = authors.join();
	}

	return (
		<>
			<article>
				{thumbnail && <img src={thumbnail} alt={`cover of ${title}`} />}
				<h3>{title}</h3>
				{authors.length > 1 ? (
					<p>Authors: {authorStr}</p>
				) : (
					<p>Author: {authorStr}</p>
				)}
				{description && <button>Show Description</button>}
			</article>
		</>
	);
};

export default BookCard;
