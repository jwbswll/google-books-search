import React, { useState } from "react";
import style from "./BookCard.module.scss";
import Button from "../Button/Button";

const BookCard = ({ bookData, showModal, setIndex, index }) => {
	const [showDesc, setShowDesc] = useState(false);
	const { title, author, image, description } = bookData;
	const aStyle = style.card;
	const toggleDesc = () => {
		setShowDesc(!showDesc);
	};

	const moreInfo = (key) => {
		showModal();
		setIndex(key);
	};

	return (
		<>
			<article className={aStyle}>
				<div className={style.img_container}>
					{image ? (
						<img src={image} className={style.img} alt={`cover of ${title}`} />
					) : (
						<p>No Image Available</p>
					)}
				</div>
				<section className={style.text_content}>
					<h3 className={style.title}>{title}</h3>
					<p className={style.author}>
						<span className={style.author_label}>Author:</span> {author}
					</p>
					{!description && (
						<p className={style.no_description}>No description available</p>
					)}
					<div className={style.btn_container}>
						{description && (
							<Button btnStyle={style.btn} onClick={toggleDesc}>
								{showDesc ? "Hide" : "Show"} Description
							</Button>
						)}
						<Button
							btnStyle={style.btn}
							onClick={() => {
								moreInfo(index);
							}}
						>
							More Info
						</Button>
					</div>
					{showDesc && <p className={style.description}>{description}</p>}
				</section>
			</article>
		</>
	);
};

export default BookCard;
