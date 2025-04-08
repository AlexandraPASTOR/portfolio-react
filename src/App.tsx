import "./App.css";
import { useState } from "react";

import Title from "./components/Title";
import Photo from "./components/Photo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import Avatar from "./components/Avatar";
import MenuList from "./components/MenuList";

const personList = [
	{
		name: "Alexandra",
		imgSrc: "./src/assets/alex.jpg",
		projet: "POKEMON",
	},

	{
		name: "Arnaud",
		imgSrc: "./src/assets/arnaud.jpg",
		projet: "SIMPSON",
	},

	{
		name: "Messica",
		imgSrc: "./src/assets/messica.webp",
		projet: "MENU",
	},
];

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];
const bart = {
	image:
		"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
	firstName: "Bart",
	lastName: "Simpson",
	donuts: 20,
};

const maggie = {
	image:
		"https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
	firstName: "Maggie",
	lastName: "Simpson",
	donuts: 2,
};

const foodItems = [
	{
		id: 1,
		itemName: "Caesar's Salad",
		description: "The original Caesar's Salad recipe",
		foodImage:
			"https://cdn.britannica.com/14/234014-050-CB842159/Caesar-salad-side-view.jpg",
		price: 12,
		isFavorite: false,
	},
	{
		id: 2,
		itemName: "Spaghetti Carbonara",
		description: "Better than your nonna's! All local and fresh ingredients",
		foodImage:
			"https://cdn.britannica.com/96/238196-050-C5560987/Plate-of-traditional-Italian-spaghetti-carbonara-surrounded-by-the-ingredients-use-to-make-it.jpg",
		price: 15,
		isFavorite: true,
	},
	{
		id: 3,
		itemName: "Grilled Fish",
		description: "Fish of the day, grilled with a side of vegetables",
		foodImage:
			"https://cdn.britannica.com/38/235438-050-08E3AE20/Grilled-barramundi-steak-on-a-bed-of-vegetables.jpg",
		price: 20,
		isFavorite: false,
	},
	{
		id: 4,
		itemName: "Steak",
		description: "Meat!",
		foodImage:
			"https://cdn.britannica.com/70/189770-050-AA419662/New-York-City-steak-Delmonico-rib-eyes.jpg",
		price: 30,
		isFavorite: false,
	},
];

function App() {
	const [personName, setPersonName] = useState("");
	const person = personList.find((person) => person.name === personName);

	const [pokemonName, setPokemonName] = useState("bulbasaur");

	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("Invalid pokemon name");
	}

	return (
		<div>
			<header>
				<Title />
				<p>Sélectionne une personne pour visualiser un projet</p>
			</header>
			<main>
				<article className="person">
					<Photo setPersonName={setPersonName} personList={personList} />
				</article>
				<section>
					{person ? (
						<div>
							<Portfolio projet={person.projet} />
							{person.name === "Alexandra" && (
								<div>
									<NavBar
										setPokemonName={setPokemonName}
										pokemonList={pokemonList}
									/>
									<PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
								</div>
							)}

							{person.name === "Arnaud" && (
								<div className="simpson">
									<Avatar
										image={bart.image}
										firstName={bart.firstName}
										lastName={bart.lastName}
										donuts={bart.donuts}
									/>
									<Avatar
										image={maggie.image}
										firstName={maggie.firstName}
										lastName={maggie.lastName}
										donuts={maggie.donuts}
									/>
								</div>
							)}

							{person.name === "Messica" && (
								<div>
									<MenuList foodItems={foodItems} />
								</div>
							)}
						</div>
					) : null}
				</section>
			</main>
			<footer>
				<Contact />
			</footer>
		</div>
	);
}

export default App;
