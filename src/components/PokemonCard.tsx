interface pokemon {
	name: string;
	imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: pokemon) {
	return (
		<figure className="card">
			<h2>{name}</h2>
			{imgSrc ? (
				<img src={imgSrc} alt={name} className="card-img" />
			) : (
				<p>???</p>
			)}
		</figure>
	);
}

export default PokemonCard;
