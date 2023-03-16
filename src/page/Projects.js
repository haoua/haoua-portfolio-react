import ContentSidebar from "../component/ContentSidebar";
import Project from "../component/Project";

export default function Projects(){
	const props = {
		title: 'Projet',
		content:[<input type="checkbox"/>, 'React', <input type="checkbox"/>, 'Tailwind CSS', <input type="checkbox"/>, 'PHP']
	}

	return (
		<div className="flex">
			<ContentSidebar props={props} />
			<div>
				<div>
					<div>
						Filtre 1
					</div>
					<div>
						Filtre 2
					</div>
				</div>
				<div className="p-6">
					<div>
						<Project />
					</div>
					<div>
						Projet 2
					</div>
				</div>
			</div>
		</div>
	)
}