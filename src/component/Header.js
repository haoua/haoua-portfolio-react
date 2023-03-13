import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="text-primary-blue border-b-2 border-lines">
			<div className="flex">
				<div>
					<Link className="inline-block border-r-2 border-lines p-6 pr-24" to="/">haoua_soualmia</Link>
				</div>
				<div className="text-right ml-auto">
					<Link className="inline-block border-l-2 border-lines p-6" to="/">_bonjour</Link>
					<Link className="inline-block border-l-2 border-lines p-6" to="/">_a-propos</Link>
					<Link className="inline-block border-l-2 border-lines p-6" to="/">_projets</Link>
					<Link className="inline-block border-l-2 border-lines p-6" to="/">_contact</Link>
				</div>
			</div>
		</header>
	);
}