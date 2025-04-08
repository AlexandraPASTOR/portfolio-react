interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonName: (name: string) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
	return (
		<nav>
			{pokemonList.map((pokemon: Pokemon) => {
				return (
					<button
						className="pokemonButton"
						key={pokemon.name}
						type="button"
						onClick={() => {
							setPokemonName(pokemon.name);
							if (pokemon.name === "pikachu") {
								alert("pika pika");
							}
						}}
					>
						{pokemon.name}
					</button>
				);
			})}
		</nav>
	);
}

export default NavBar;
