import { Form, Link } from "react-router-dom";
import studentRoster from "../assets/roster.json";
import { useState } from "react";

export default function Game() {
	const students = studentRoster.students;

	let [target, setTarget] = useState([]);
	let [score, setScore] = useState(0);

	const getRandomStudents = (count, max) => {
		const target = new Set();
		while (target.size < count) {
			const randomNum = Math.floor(Math.random() * max);
			target.add(students[randomNum]);
		}
		return Array.from(target);
	};

	let targetStudents = getRandomStudents(5, students.length);

	const checkCorrect = (name) => {
		// check if the student.name is in the targetStudents list
		console.log(name);
		if (targetStudents.includes(name)) {
			// do something
		}
	};

	return (
		<>
			<div id="sidebar">
				<h1>Find Your MMDD!</h1>
				<div>
					{students.map((student) => (
						<div key={student.name} onClick={() => checkCorrect(student.name)}>
							<img src={student.photo} alt={student.name} />
						</div>
					))}
				</div>
				<div>
					{targetStudents.map((student) => (
						<p key={student.name}>{student.name}</p>
					))}
				</div>
			</div>

			<Link to={`/roster`}>Class Roster</Link>
		</>
	);
}
