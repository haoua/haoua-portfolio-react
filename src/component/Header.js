import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className="text-primary-blue border-b-2 border-lines">
			<div className="flex">
				<div className="w-1/4 border-r-2 border-lines">
					<NavLink className="inline-block p-6" to="/">haoua_soualmia</NavLink>
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