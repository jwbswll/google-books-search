const cleanBookArr = (bookArr) => {
	return bookArr.map((bookObj) => {
		return {
			title: bookObj.volumeInfo?.title ?? "No title available",
			description: bookObj.volumeInfo?.description ?? undefined,
			author:
				bookObj.volumeInfo?.authors[0] ?? "No author information available",
			image: bookObj.volumeInfo?.imageLinks?.thumbnail ?? undefined,
		};
	});
};

export const getBooksBySearchTerm = async (searchTerm) => {
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
	return cleanBookArr(data.items);
};
