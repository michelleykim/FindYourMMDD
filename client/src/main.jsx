import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./components/error-page.jsx";
import Game from "./routes/game.jsx";
import Roster from "./routes/roster.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/game",
		element: <Game />,
	},
	{
		path: "/roster",
		element: <Roster />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
