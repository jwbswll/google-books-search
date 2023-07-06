import React, { useState } from "react";
import style from "./BookCard.module.scss";
import Button from "../Button/Button";

const BookCard = ({ bookData }) => {
	const [showDesc, setShowDesc] = useState(false);
	const { title, author, image, description } = bookData;

	const toggleDesc = () => {
		setShowDesc(!showDesc);
	};

	return (
		<>
			<article className={style.card}>
				<div className={style.img_container}>
					{image ? (
						<img src={image} className={style.img} alt={`cover of ${title}`} />
					) : (
						<p>No Image Available</p>
					)}
				</div>
				<section className={style.text_content}>
					<h3 className={style.title}>{title}</h3>
					<p className={style.author}>Author: {author}</p>
					{description && (
						<Button btnStyle={style.btn} onClick={toggleDesc}>
							{showDesc ? "Hide" : "Show"} Description
						</Button>
					)}
					{showDesc && <p>{description}</p>}
				</section>
			</article>
		</>
	);
};

export default BookCard;
