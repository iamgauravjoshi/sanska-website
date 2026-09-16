import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { CTAButton } from "./Buttons";
import { mainNav, aboutUsNav, NavChild } from "../data/nav";
import companyConfig from "../data/companyConfig";
import { isPlaceholder } from "../utils/placeholders";
import Icon from "./Icon";

export default function Header() {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	const [scrolled, setScrolled] = useState(false);
	const [drawer, setDrawer] = useState(false);
	const [openGroup, setOpenGroup] = useState<string | null>(null);
	const [mobileGroup, setMobileGroup] = useState<string | null>(null);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => setDrawer(false), [pathname]);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setDrawer(false);
				setOpenGroup(null);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	// lock body scroll while drawer open
	useEffect(() => {
		document.body.style.overflow = drawer ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [drawer]);

	const solid = !isHome || scrolled;
	const phoneReal = !isPlaceholder(companyConfig.contact.phone);

	return (
		<>
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[100] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
			>
				Skip to content
			</a>
			<header
				ref={headerRef}
				id="site-header"
				className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
					solid
						? "border-b border-line bg-white/98 shadow-header backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
						: "border-b border-transparent bg-transparent"
				}`}
				onMouseLeave={() => setOpenGroup(null)}
			>
				<div className="container-x flex h-[74px] items-center justify-between gap-4">
					<Logo variant={solid ? "header" : "footer"} size="md" />

					<nav aria-label="Primary" className="hidden items-center xl:flex">
						<ul className="flex items-center gap-2">
							{mainNav.map((item) => (
								<li
									key={item.label}
									className="relative"
									onMouseEnter={() => item.children && setOpenGroup(item.label)}
									onMouseLeave={() => item.children && setOpenGroup(null)}
								>
									<NavLink
										to={item.to}
										end={item.to === "/"}
										aria-haspopup={item.children ? "true" : undefined}
										aria-expanded={
											item.children ? openGroup === item.label : undefined
										}
										onFocus={() => item.children && setOpenGroup(item.label)}
										className={({ isActive }) =>
											`flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-base tracking-wide transition-colors duration-200 relative ${
												isActive && openGroup !== item.label
													? solid
														? "text-brand-600"
														: "text-brand-400"
													: solid
														? "text-navy/85 hover:text-brand-600"
														: "text-white/90 hover:text-white"
											}`
										}
									>
										{item.label}
										{item.children && (
											<ChevronDown
												className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 ${openGroup === item.label ? "rotate-180" : ""}`}
												aria-hidden="true"
											/>
										)}
									</NavLink>
									{item.children && openGroup === item.label && (
										<div className="absolute left-0 top-full pt-[6px] w-[310px]">
											<div className="rounded-lg border border-line bg-white p-2 shadow-lift">
												<ul>
													{item.children.map((c: NavChild) => (
														<li key={c.to + c.label}>
															<Link
																to={c.to}
																className="flex gap-2.5 rounded-md px-2 py-2 text-[13.5px] font-medium text-ink transition-colors hover:bg-[#E8F7FC] hover:text-[#0694BC] border border-transparent hover:border hover:border-gray-100"
															>
																{c.icon ? (
																	<Icon
																		name={c.icon}
																		className="h-[24px] w-[24px]"
																	/>
																) : (
																	<></>
																)}
																<div>
																	{c.label}
																	{c.desc && (
																		<span className="mt-0.5 block text-[11.5px] font-normal text-muted">
																			{c.desc}
																		</span>
																	)}
																</div>
															</Link>
														</li>
													))}
												</ul>
											</div>
										</div>
									)}
								</li>
							))}
							{/* About Nav group */}
							{/* <li
								className="relative"
								onMouseEnter={() => setOpenGroup("More")}
								onMouseLeave={() => setOpenGroup(null)}
							>
								<button
									type="button"
									aria-expanded={openGroup === "More"}
									className={`flex items-center gap-1 rounded-md px-3 py-2 text-[13.5px] font-semibold transition-colors ${
										solid
											? "text-navy/85 hover:text-brand-600"
											: "text-white/90 hover:text-white"
									}`}
								>
									About Us
									<ChevronDown
										className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 ${openGroup === "More" ? "rotate-180" : ""}`}
										aria-hidden="true"
									/>
								</button>
								{openGroup === "More" && (
									<div className="absolute right-0 top-full w-[250px] pt-[6px]">
										<div className="rounded-lg border border-line bg-white p-1.5 shadow-lift">
											<ul>
												{aboutUsNav.map((c) => (
													<li key={c.to}>
														<Link
															to={c.to}
															className="block rounded-md px-3 py-2 text-[13.5px] font-medium text-ink transition-colors hover:bg-[#E8F7FC] hover:text-[#0694BC]"
														>
															{c.label}
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								)}
							</li> */}
						</ul>
					</nav>

					<div className="hidden items-center gap-2.5 xl:flex">
						<CTAButton
							to="/employers"
							className="!px-4 !py-2.5 !text-[13px] whitespace-nowrap tracking-wide 2xl:!text-sm"
							withArrow={false}
						>
							Request Manpower
						</CTAButton>
					</div>

					<button
						type="button"
						className={`flex h-11 w-11 items-center justify-center rounded-md xl:hidden ${solid ? "text-navy" : "text-white"}`}
						aria-label={drawer ? "Close menu" : "Open menu"}
						aria-expanded={drawer}
						aria-controls="mobile-drawer"
						onClick={() => setDrawer((v) => !v)}
					>
						{drawer ? (
							<X className="h-6 w-6" aria-hidden="true" />
						) : (
							<Menu className="h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>
			</header>

			{/* Mobile drawer */}
			<div
				id="mobile-drawer"
				className={`fixed inset-0 z-[60] xl:hidden ${drawer ? "" : "pointer-events-none"}`}
				aria-hidden={!drawer}
			>
				<div
					className={`absolute inset-0 bg-navy/55 transition-opacity duration-300 ${drawer ? "opacity-100" : "opacity-0"}`}
					onClick={() => setDrawer(false)}
				/>
				<div
					role="dialog"
					aria-modal="true"
					aria-label="Site navigation"
					className={`absolute inset-y-0 right-0 flex w-[min(92vw,400px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
						drawer ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className="flex items-center justify-between border-b border-line px-5 py-4">
						<Logo size="sm" />
						<button
							type="button"
							onClick={() => setDrawer(false)}
							className="flex h-11 w-11 items-center justify-center rounded-md text-navy hover:bg-paper"
							aria-label="Close menu"
						>
							<X className="h-5 w-5" aria-hidden="true" />
						</button>
					</div>
					<nav
						aria-label="Mobile"
						className="scrollbar-slim flex-1 overflow-y-auto px-5 py-4"
					>
						<ul className="space-y-0.5">
							{[
								...mainNav,
								{ label: "More", to: "#", children: aboutUsNav },
							].map((item) => {
								const hasKids =
									"children" in item &&
									item.children &&
									item.children.length > 0;
								const expanded = mobileGroup === item.label;
								return (
									<li key={item.label} className="rounded-md">
										<div className="flex items-center">
											{item.to !== "#" ? (
												<NavLink
													to={item.to}
													end={item.to === "/"}
													className={({ isActive }) =>
														`flex-1 rounded-md px-3 py-3 text-[15px] font-semibold ${isActive ? "bg-ice text-brand-700" : "text-navy"}`
													}
												>
													{item.label}
												</NavLink>
											) : (
												<span className="flex-1 px-3 py-3 text-[15px] font-semibold text-navy">
													{item.label}
												</span>
											)}
											{hasKids && (
												<button
													type="button"
													className="flex h-11 w-11 items-center justify-center rounded-md text-muted"
													aria-expanded={expanded}
													aria-label={`Toggle ${item.label} submenu`}
													onClick={() =>
														setMobileGroup(expanded ? null : item.label)
													}
												>
													<ChevronDown
														className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
														aria-hidden="true"
													/>
												</button>
											)}
										</div>
										{hasKids && expanded && (
											<ul className="mb-2 ml-4 space-y-0.5 border-l border-line pl-3">
												{item.children!.map((c) => (
													<li key={c.to + c.label}>
														<Link
															to={c.to}
															className="block rounded px-3 py-2.5 text-[14px] font-medium text-muted hover:bg-paper hover:text-navy"
														>
															{c.label}
														</Link>
													</li>
												))}
											</ul>
										)}
									</li>
								);
							})}
						</ul>
					</nav>
					<div className="border-t border-line p-5">
						<CTAButton to="/employers" className="w-full">
							Request Manpower
						</CTAButton>
						<CTAButton
							to="/candidates"
							variant="outline"
							className="mt-2.5 w-full"
							withArrow={false}
						>
							Submit CV — Apply Now
						</CTAButton>
						<p className="mt-4 text-center text-[12px] text-muted">
							{phoneReal ? (
								<a
									href={`tel:${companyConfig.contact.phone.replace(/[^\d+]/g, "")}`}
									className="font-semibold text-navy"
								>
									{companyConfig.contact.phone}
								</a>
							) : (
								"Contact details published on the Contact page"
							)}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
