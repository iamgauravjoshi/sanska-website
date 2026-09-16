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
		const onScroll = () => setShow(window.scrollY > 540 && !onFormPage);
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
					<MessageCircle
						className="h-6 w-6"
						aria-hidden="true"
						fill="currentColor"
					/>
				</a>
			) : (
				<Link
					className={`${cls} group !bg-navy`}
					style={style}
					to={href}
					aria-label="Contact us (WhatsApp not yet published)"
				>
					{inner}
					<MessageCircle className="h-6 w-6" aria-hidden="true" />
				</Link>
			)}
		</div>
	);
}
