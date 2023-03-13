import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className="text-primary-blue border-b-2 border-lines">
			<div className="flex">
				<div>
					<NavLink className="inline-block border-r-2 border-lines p-6 pr-24" to="/">haoua_soualmia</NavLink>
				</div>
				<div id="nav" className="text-right ml-auto">
					<NavLink activeClassName="active" to="/">_bonjour</NavLink>
					<NavLink activeClassName="active" to="/about">_a-propos</NavLink>
					<NavLink activeClassName="active" to="/projects">_projets</NavLink>
					<NavLink activeClassName="active" to="/contact">_contact</NavLink>
				</div>
			</div>
		</header>
	);
}