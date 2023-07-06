import React from "react";
import CloseBtn from "../CloseBtn/CloseBtn";
import style from "./MoreInfo.module.scss";
const MoreInfo = ({ modalBook, showModal }) => {
	const {
		title,
		author,
		description,
		image,
		language,
		googleBooks,
		releaseDate,
	} = modalBook;
	return (
		<>
			<div className={style.overlay} onClick={showModal}></div>
			<article className={style.card}>
				<div className={style.close}>
					<CloseBtn onClick={showModal} />
				</div>
				<div className={style.top_container}>
					<img className={style.img} src={image} alt={`Cover of ${title}`} />
					<div className={style.book_info}>
						<h3 className={style.title}>{title}</h3>
						<p>
							<span>Author:</span> {author}
						</p>
						<p>Published: {releaseDate}</p>
						<p>Language: {language}</p>
						<a onClick={showModal} href={googleBooks}>
							Google Books
						</a>
					</div>
				</div>
				<p className={style.description}>{description}</p>
			</article>
		</>
	);
};

export default MoreInfo;
