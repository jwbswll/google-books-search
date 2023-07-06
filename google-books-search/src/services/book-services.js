const cleanBookArr = (bookArr) => {
	return bookArr.map((bookObj) => {
		const authorStr = bookObj.volumeInfo.authors
			? bookObj.volumeInfo.authors[0]
			: "No author info available";
		return {
			title: bookObj.volumeInfo?.title ?? "No title available",
			description: bookObj.volumeInfo?.description ?? undefined,
			author: authorStr,
			image: bookObj.volumeInfo?.imageLinks?.thumbnail ?? undefined,
		};
	});
};

export const getBooksBySearchTerm = async (searchTerm) => {
	if (searchTerm !== "") {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`,
			{
				headers: {
					Accept: "application/json",
				},
			}
		);
		if (!response.ok) {
			throw new Error("Failed to find books");
		}
		const data = await response.json();
		if (data.items === undefined) {
			throw new Error(`No books containing: ${searchTerm}`);
		}
		return cleanBookArr(data.items);
	}
};
