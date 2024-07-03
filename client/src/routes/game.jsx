import { useNavigate } from "react-router-dom";
import studentRoster from "../assets/roster.json";
import { useState } from "react";

const header = {
	textAlign: "center",
};
const frames = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	justifyContent: "space-between",
	textAlign: "center",
	width: "100%",
};
const photo = {
	borderRadius: "1em",
	margin: "1em",
	width: "8vw",
	height: "12vw",
	objectFit: "cover",
};
const footer = {
	position: "fixed",
	left: 0,
	bottom: 0,
	width: "100%",
	backgroundColor: "rgba(255, 255, 255, 0.9)",
	boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
};
const names = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-evenly",
	fontSize: "1.6em",
};

export default function Game() {
	const students = studentRoster.students;
	const navigate = useNavigate();

	let [score, setScore] = useState(0);
	let [coins, setCoins] = useState(
		() => Number(localStorage.getItem("coins")) || 0
	);

	const getRandomStudents = (count, max) => {
		const target = new Set();
		while (target.size < count) {
			const randomNum = Math.floor(Math.random() * max);
			target.add(students[randomNum].name);
		}
		return Array.from(target);
	};

	let targetStudents = getRandomStudents(2, students.length);

	const checkCorrect = (name) => {
		if (targetStudents.includes(name)) {
			setScore((prevScore) => prevScore + 1);
			setCoins((prevCoin) => prevCoin + 1);
			localStorage.setItem("coins", coins);
			alert(`You found ${name}!\nNow you have ${coins} coins.`);
		} else {
			if (window.confirm("Wrong! Do you want to review the class roster?")) {
				navigate("/roster");
			}
		}
	};

	return (
		<div style={header}>
			<h1>Find Your MMDD!</h1>
			<h2>MMDDs&apos; found: {score}</h2>
			<div style={frames}>
				{students.map((student) => (
					<div key={student.name} onClick={() => checkCorrect(student.name)}>
						<img style={photo} src={student.photo} alt={student.name} />
					</div>
				))}
			</div>
			<div style={footer}>
				<div style={names}>
					{targetStudents.map((student) => (
						<p key={student}>{student}</p>
					))}
				</div>
			</div>
		</div>
	);
}
