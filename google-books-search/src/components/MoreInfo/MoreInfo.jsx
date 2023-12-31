import React, { useEffect, useState } from "react";
import CloseBtn from "../CloseBtn/CloseBtn";
import style from "./MoreInfo.module.scss";
const MoreInfo = ({ modalBook, showModal }) => {
	const [modalShown, setModalShown] = useState(true);
	const {
		title,
		author,
		description,
		image,
		language,
		googleBooks,
		releaseDate,
	} = modalBook;

	useEffect(() => {
		if (!modalShown) {
			return;
		}
		const escapeListen = (e) => {
			if (e.key === "Escape") {
				showModal();
				setModalShown(false);
				console.log("escape pressed");
			}
		};
		window.addEventListener("keydown", escapeListen);
		return () => window.removeEventListener("keydown", escapeListen);
	}, []);
	return (
		<>
			<div className={style.overlay} onClick={showModal}></div>
			<article className={style.card}>
				<div className={style.close}>
					<CloseBtn onClick={showModal} />
				</div>
				<div className={style.top_container}>
					{image ? (
						<img className={style.img} src={image} alt={`Cover of ${title}`} />
					) : (
						<div className={style.img}>
							<p>No Image Available</p>
						</div>
					)}
					<div className={style.book_info}>
						<h3 className={style.title}>{title}</h3>
						<p>
							<span>Author:</span> {author}
						</p>
						<p>Published: {releaseDate}</p>
						<p>Language: {language}</p>
						<a href={googleBooks} target="_blank">
							View on Google Books
						</a>
					</div>
				</div>
				{description && <p className={style.description}>{description}</p>}
			</article>
		</>
	);
};

export default MoreInfo;
