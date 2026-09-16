import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import PageLoader from "./components/PageLoader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const GlobalPresence = lazy(() => import("./pages/GlobalPresence"));
const Employers = lazy(() => import("./pages/Employers"));
const Candidates = lazy(() => import("./pages/Candidates"));
const RecruitmentProcess = lazy(() => import("./pages/RecruitmentProcess"));
const JobCategories = lazy(() => import("./pages/JobCategories"));
// const Projects = lazy(() => import("./pages/Projects"));
const Licenses = lazy(() => import("./pages/Licenses"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				<Route element={<SiteLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/industries" element={<Industries />} />
					<Route path="/global-presence" element={<GlobalPresence />} />
					<Route path="/employers" element={<Employers />} />
					<Route path="/candidates" element={<Candidates />} />
					<Route path="/recruitment-process" element={<RecruitmentProcess />} />
					<Route path="/job-categories" element={<JobCategories />} />
					{/* <Route path="/projects" element={<Projects />} /> */}
					<Route path="/licenses" element={<Licenses />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/privacy" element={<Privacy kind="privacy" />} />
					<Route path="/terms" element={<Privacy kind="terms" />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
}
