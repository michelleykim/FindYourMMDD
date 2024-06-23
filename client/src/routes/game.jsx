import { Form, Link } from "react-router-dom";

export default function Game() {
	const contact = {
		first: "Your",
		last: "Name",
		avatar: "https://robohash.org/you.png?size=200x200",
		twitter: "your_handle",
		notes: "Some notes",
		favorite: true,
	};

	return (
		<>
			<div id="sidebar">
				<h1>Find Your MMDD!</h1>
			</div>

			<Link to={`/roster`}>Class Roster</Link>
		</>
	);
}

function Favorite({ contact }) {
	const favorite = contact.favorite;
	return (
		<Form method="post">
			<button
				name="favorite"
				value={favorite ? "false" : "true"}
				aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
			>
				{favorite ? "★" : "☆"}
			</button>
		</Form>
	);
}
