import { useState } from "react";

function MenuItem(props) {
	const [favorite, setFavorite] = useState(props.isFavorite);

	const handleClickFavorite = () => {
		setFavorite((favorite) => !favorite);
	};

	return (
		<section className="itemContainer">
			<figure className="imgContainer">
				<img src={props.foodImage} alt={props.itemName} />
				<figcaption>
					<h2>{props.itemName}</h2>
					<p>{props.description}</p>
				</figcaption>
			</figure>
			<aside>{props.price} EUR</aside>
			<button type="button" onClick={handleClickFavorite}>
				{favorite ? <>❤️</> : <>🖤</>}
			</button>
		</section>
	);
}

export default MenuItem;
