import React, { useState } from "react";
import style from "./BookCard.module.scss";

const BookCard = ({ bookData }) => {
	const [showDesc, setShowDesc] = useState(false);
	console.log("bookcard data", bookData);
	const { title, author, image, description } = bookData;

	const toggleDesc = () => {
		setShowDesc(!showDesc);
	};

	return (
		<>
			<article className={style.card}>
				{image && <img src={image} alt={`cover of ${title}`} />}
				<h3>{title}</h3>
				<p>Author: {author}</p>
				{description && (
					<button onClick={toggleDesc}>
						{showDesc ? "Hide" : "Show"} Description
					</button>
				)}
				{showDesc && <p>{description}</p>}
			</article>
		</>
	);
};

export default BookCard;
