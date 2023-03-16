export default function ContentSidebar({props}){
	return(
		<div className="border-r-2 border-lines px-6 w-1/4">
			v {props.title}<br />
			{props.content}
		</div>
	)
}