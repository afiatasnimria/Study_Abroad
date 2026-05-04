import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ScholarshipHuntLanding from "./ScholarshipHuntLanding";

function App() {
	const [currentPage, setCurrentPage] = useState("home");

	useEffect(() => {
		// Handle URL-based navigation
		const handleUrlChange = () => {
			const path = window.location.pathname;
			if (path === "/login") {
				setCurrentPage("login");
			} else if (path === "/register") {
				setCurrentPage("register");
			} else {
				setCurrentPage("home");
			}
		};

		// Set initial page
		handleUrlChange();

		// Listen for popstate events (browser back/forward)
		window.addEventListener("popstate", handleUrlChange);

		return () => window.removeEventListener("popstate", handleUrlChange);
	}, []);

	// Handle navigation from buttons
	const handleNavigate = (page) => {
		setCurrentPage(page);
		if (page === "home") {
			window.history.pushState(null, "", "/");
		} else if (page === "login") {
			window.history.pushState(null, "", "/login");
		} else if (page === "register") {
			window.history.pushState(null, "", "/register");
		}
		window.scrollTo(0, 0);
	};

	// Listen for manual link clicks
	useEffect(() => {
		const handleLinkClick = (e) => {
			const href = e.target.getAttribute("href");
			if (href === "/login" || href === "/register" || href === "/") {
				e.preventDefault();
				handleNavigate(href === "/" ? "home" : href.slice(1));
			}
		};

		document.addEventListener("click", handleLinkClick);
		return () => document.removeEventListener("click", handleLinkClick);
	}, []);

	return (
		<>
			{currentPage === "home" && (
				<ScholarshipHuntLanding onNavigate={handleNavigate} />
			)}
			{currentPage === "login" && <Login onNavigate={handleNavigate} />}
			{currentPage === "register" && <Register onNavigate={handleNavigate} />}
		</>
	);
}

export default App;
