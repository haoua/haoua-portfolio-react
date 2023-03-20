import {MdOutlineArrowDropDown} from "react-icons/md";

export default function ContentSidebar({props}){
	return(
		<div className="border-r-2 border-lines px-6 w-1/4">
			<div className="flex inline-flex items-center">
				<div>
					<MdOutlineArrowDropDown />
				</div>
				<div>
					{props.title}
				</div>
			</div>
			{props.content}
		</div>
	)
}