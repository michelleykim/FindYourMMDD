import { Link } from "react-router-dom";
import studentRoster from "../assets/roster.json";

const content = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "96vw",
};
const title = {
	fontSize: "5.2em",
};
const frames = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	justifyContent: "space-between",
	textAlign: "center",
	width: "100%",
};
const frame = {
	width: "18vw",
	height: "32vw",
};
const photo = {
	borderRadius: "1em",
	margin: "1em",
	width: "12vw",
	height: "20vw",
	objectFit: "cover",
};
const name = {
	fontSize: "1.6em",
	textOverflow: "ellipsis",
	margin: 0,
};
const button = {
	position: "fixed",
	bottom: "10px",
	margin: "1em",
	padding: "1em 2em",
	borderRadius: "1em",
	backgroundColor: "#d9d9d9",
	fontSize: "2em",
};

export default function Roster() {
	const students = studentRoster.students;

	return (
		<>
			<div style={content}>
				<h1 style={title}>Class Roster</h1>
				<div style={frames}>
					{students.map((student) => (
						<Frame key={student.name} student={student} />
					))}
				</div>
				<Link style={button} to={`/game`}>
					Let&apos;s Start!
				</Link>
			</div>
			<div>
				{
					// add details view- as a component
				}
			</div>
		</>
	);
}

function Frame({ student }) {
	return (
		<div style={frame}>
			<img style={photo} src={student.photo} alt={`${student.name}`} />
			<h2 style={name}>{student.name}</h2>
		</div>
	);
}
