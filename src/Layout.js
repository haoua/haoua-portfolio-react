import Header from "./component/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className="border border-lines bg-primary-dark-blue text-primary-blue rounded">
			<Header />
			<div>
				<Outlet />
			</div>
		</div>
	);
}