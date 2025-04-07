interface Person {
	name: string;
	imgSrc: string;
}

interface PhotoProps {
	personList: Person[];
	setPersonName: (name: string) => void;
}

function Photo({ personList, setPersonName }: PhotoProps) {
	return (
		<div className="bouton">
			{personList.map((person) => (
				<button
					key={person.name}
					type="button"
					onClick={() => {
						setPersonName(person.name);
					}}
				>
					<img src={person.imgSrc} alt={person.name} />
					<h2>{person.name}</h2>
				</button>
			))}
		</div>
	);
}

export default Photo;
