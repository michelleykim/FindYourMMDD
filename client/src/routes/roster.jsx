import { Link } from "react-router-dom";
import studentRoster from "../assets/roster.json";

export default function Roster() {
	const students = studentRoster.students;

	return (
		<>
			<div>
				<h1>Class Roster</h1>
				<div>
					{students.map((student) => (
						<Frame key={student.name} student={student} />
					))}
				</div>
			</div>

			<Link to={`/game`}>Let&apos;s Start!</Link>
		</>
	);
}

function Frame({ student }) {
	return (
		<div className="frame">
			<h1>{student.name}</h1>
			<img src={student.photo} alt={`${student.name}`} />
		</div>
	);
}
