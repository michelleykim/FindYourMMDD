import { Link } from "react-router-dom";

export default function Root() {
	return (
		<>
			<div id="sidebar">
				<h1>Find Your MMDD!</h1>
				<h2>Can you get&apos;em all?</h2>
			</div>
			<Link to={`/game`}>Let&apos;s Start!</Link>
			<br></br>
			<Link to={`/roaster`}>Class Roaster</Link>
		</>
	);
}
