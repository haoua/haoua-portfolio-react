import background from "../img/projet1.jpg";

export default function Project(){
    return (
        <div>
            <div>
                <span className="text-secondary-blue font-bold">Plannr </span>
                // _php-webapp
            </div>
            <div className="border border-lines rounded-lg">
                <div className="h-48 w-full rounded-t-lg border-b-2 border-lines bg-cover" style={{backgroundImage: `url(${background})`}}></div>
                <div className="bg-primary-darkest-blue p-4">
                    Duis aute irure dolor in velit esse cillum dolore. <br />
                    <button>voir-projet</button>
                </div>
            </div>
        </div>
    )
}