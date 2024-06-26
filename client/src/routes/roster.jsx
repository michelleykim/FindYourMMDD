import { Link } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import studentRoster from "../assets/roster.json";
import { useState } from "react";

const content = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "96vw",
};
const title = {
	fontSize: "5.2em",
	marginBottom: 0,
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
	height: "28vw",
};
const photo = {
	borderRadius: "1em",
	margin: "0.8em",
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
	boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
	fontSize: "2em",
};
const modal = {
	backgroundColor: "white",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	margin: "auto",
	marginTop: "15vh",
};
const detailContent = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	margin: "2vh",
};
const unlockButton = {
	padding: "0.4em 0.8em",
	borderRadius: "1em",
	backgroundColor: "#d9d9d9",
	boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
	fontSize: "2em",
};

const price = 10;

export default function Roster() {
	const students = studentRoster.students;

	let [openModal, setOpenModal] = useState(false);
	let [focusedStudent, setFocusedStudent] = useState();
	let [coins, setCoins] = useState(
		() => Number(localStorage.getItem("coins")) || 0
	);

	return (
		<>
			<div style={content}>
				<h1 style={title}>Class Roster</h1>
				<h2>You have {coins} coins</h2>
				<div style={frames}>
					{students.map((student) => (
						<div
							key={student.name}
							onClick={() => {
								setOpenModal(true);
								setFocusedStudent(student);
							}}
						>
							<Frame student={student} />
						</div>
					))}
				</div>
				<Link style={button} to={`/game`}>
					Let&apos;s Start!
				</Link>
			</div>
			<div>
				<Modal open={openModal} onClose={() => setOpenModal(false)}>
					<Box sx={modal}>
						<ModalContent
							student={focusedStudent}
							coins={coins}
							setCoins={setCoins}
							onClick={() => setOpenModal(true)}
						/>
					</Box>
				</Modal>
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

function ModalContent({ student, coins, setCoins }) {
	let [unlocked, setUnlocked] = useState(() => {
		const storedUnlocked = localStorage.getItem("unlocked");
		return storedUnlocked ? JSON.parse(storedUnlocked) : [];
	});

	let [isUnlocked, setIsUnlocked] = useState(
		unlocked.some((item) => item.name === student.name)
	);

	const handleUnlock = () => {
		if (coins >= price && !isUnlocked) {
			setCoins((prevCoins) => prevCoins - price);
			const newUnlocked = [
				...unlocked,
				{ name: student.name, quote: student.quote },
			];
			setUnlocked(newUnlocked);
			setIsUnlocked(true);
			localStorage.setItem("coins", String(coins - price));
			localStorage.setItem("unlocked", JSON.stringify(newUnlocked));
		} else {
			alert(
				`You don't have enough coins to unlock ${student.name}'s quote!\nFind more MMDD to earn coins!`
			);
		}
	};

	return (
		<div style={detailContent}>
			<img style={photo} src={student.photo} alt={`${student.name}`} />
			<h2 style={name}>{student.name}</h2>
			{isUnlocked ? (
				<h2>{student.quote}</h2>
			) : (
				<h2 style={unlockButton} onClick={handleUnlock}>
					Unlock {student.name}&apos;s quote &#40;{price} coins&#41;
				</h2>
			)}
		</div>
	);
}
