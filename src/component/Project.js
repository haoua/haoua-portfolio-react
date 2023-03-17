import background from "../img/projet1.jpg";

export default function Project({projetInfo}){
    return (
        <div>
            <div>
                <span className="text-secondary-blue font-bold">{projetInfo.title} </span>
                // {projetInfo.subtitle}
            </div>
            <div className="border border-lines rounded-lg">
                <div className="h-48 w-full rounded-t-lg border-b-2 border-lines bg-cover" style={{backgroundImage: `url(${background})`}}></div>
                <div className="bg-primary-darkest-blue p-4">
                    {projetInfo.desc} <br />
                    <button>voir-projet</button>
                </div>
            </div>
        </div>
    )
}