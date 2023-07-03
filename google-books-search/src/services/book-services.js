export const getBooksbySearchTerm = async (searchTerm, searchType) => {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+${searchType}`,
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
	return data.items;
};
