import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import companyConfig from "../data/companyConfig";
import { isPlaceholder } from "../utils/placeholders";

/**
 * Floating WhatsApp button — only links out once a real number is configured;
 * while unverified it routes to /contact instead of dialling an unknown number.
 * Appears after the visitor is past the first screen; never covers forms.
 */
export default function FloatingContact() {
	const { pathname } = useLocation();
	const [show, setShow] = useState(false);
	const onFormPage = pathname === "/employers" || pathname === "/candidates";

	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 150 && !onFormPage);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [onFormPage]);

	const wa = companyConfig.contact.whatsapp;
	const real = !isPlaceholder(wa);
	const href = real
		? `https://wa.me/${String(wa).replace(/[^\d]/g, "")}?text=${encodeURIComponent(companyConfig.contact.whatsappMessage)}`
		: "/contact";

	const inner = (
		<span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-navy px-3 py-1.5 text-[12px] font-semibold text-white opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100">
			{real ? "Chat with our recruitment desk" : "Contact us"}
		</span>
	);

	const cls =
		"fixed bottom-5 right-5 z-40 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-all duration-300 hover:scale-105";

	const style = { height: 52, width: 52 } as const;

	return (
		<div
			// translate-y-0
			className={`${show ? " opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
			style={{ transition: "opacity .3s, transform .3s" }}
		>
			{real ? (
				<a
					className={`${cls} group`}
					style={style}
					href={href}
					target="_blank"
					rel="noreferrer"
					aria-label="Chat on WhatsApp"
				>
					{inner}
					{/* <MessageCircle
						className="h-6 w-6"
						aria-hidden="true"
						fill="currentColor"
					/> */}
					<svg
						className="h-7 w-7"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
					</svg>
					{/* <i className="fa-brands fa-whatsapp h-6 w-6 z-[80] fill-white text-white"></i> */}
				</a>
			) : (
				<Link
					className={`${cls} group !bg-navy`}
					style={style}
					to={href}
					aria-label="Contact us (WhatsApp not yet published)"
				>
					{inner}
					<i className="fa-brands fa-whatsapp"></i>
					{/* <MessageCircle className="h-6 w-6" aria-hidden="true" /> */}
				</Link>
			)}
		</div>
	);
}
