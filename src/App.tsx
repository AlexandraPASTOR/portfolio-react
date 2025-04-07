import "./App.css";
import { useState } from "react";

import Title from "./components/Title";
import Photo from "./components/Photo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
const personList = [
	{
		name: "Alexandra",
		imgSrc: "./src/assets/alex.jpg",
		projet: "POKEMON",
		imgProjet: "./src/assets/pokemon.png",
	},

	{
		name: "Arnaud",
		imgSrc: "./src/assets/arnaud.jpg",
		projet: "SIMPSON",
		imgProjet: "./src/assets/simpson.png",
	},

	{
		name: "Messica",
		imgSrc: "./src/assets/messica.webp",
		projet: "MENU",
		imgProjet: "./src/assets/marmiwild.webp",
	},
];

function App() {
	const [personName, setPersonName] = useState("");
	const person = personList.find((person) => person.name === personName);

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
						<Portfolio projet={person.projet} imgProjet={person.imgProjet} />
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
