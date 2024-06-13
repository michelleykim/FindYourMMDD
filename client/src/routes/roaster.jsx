import { Form, Link } from "react-router-dom";

export default function Roaster() {
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
				<h1>Class Roaster</h1>
			</div>

			<Link to={`/game`}>Let&apos;s Start!</Link>
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
