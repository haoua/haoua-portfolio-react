import ContentSidebar from "../component/ContentSidebar";

export default function Contact(){
	const props = {
		title: 'Contact'
	}
	return (
		<div className="flex">
			<ContentSidebar props={props} />
			<div>
				<h1>Contact</h1>
			</div>
		</div>
	)
}