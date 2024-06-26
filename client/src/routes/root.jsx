import { Link } from "react-router-dom";

const content = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "100vw",
};
const title = {
	fontSize: "5.2em",
	margin: 0,
};
const subTitle = {
	fontSize: "2.4em",
	margin: 0,
};
const buttonGroup = {
	display: "flex",
	flexDirection: "row",
	marginTop: "2em",
};
const button = {
	margin: "1em",
	padding: "1em 2em",
	borderRadius: "1em",
	backgroundColor: "#d9d9d9",
	fontSize: "1.6em",
};

export default function Root() {
	return (
		<div style={content}>
			<h1 style={title}>Find Your MMDD!</h1>
			<h2 style={subTitle}>Can you get&apos;em all?</h2>
			<div style={buttonGroup}>
				<Link style={button} to={`/game`}>
					Let&apos;s Start!
				</Link>
				<Link style={button} to={`/roster`}>
					Class Roster
				</Link>
			</div>
		</div>
	);
}
