import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
	console.log(foodItems);
	return (
		<div>
			{foodItems.map((item) => (
				<MenuItem
					key={item.itemName}
					id={item.id}
					itemName={item.itemName}
					description={item.description}
					foodImage={item.foodImage}
					price={item.price}
					isFavorite={item.isFavorite}
				/>
			))}
		</div>
	);
}

export default MenuList;
