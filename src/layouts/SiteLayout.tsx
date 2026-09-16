import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { useRevealObserver } from "../hooks/useReveal";
import { useScrollTopAndHash } from "../hooks/useSeo";

export default function SiteLayout() {
	useScrollTopAndHash();
	useRevealObserver();
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main id="main" tabIndex={-1} className="flex-1 outline-none">
				<Outlet />
			</main>
			<Footer />
			<FloatingContact />
		</div>
	);
}
