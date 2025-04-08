import { useState } from "react";

interface PropsType {
	firstName: string;
	lastName: string;
	image: string;
	donuts: number;
}

function Avatar({ image, firstName, lastName, donuts }: PropsType) {
	const [count, setCount] = useState(donuts);

	return (
		<section>
			<img src={image} alt={`${firstName} ${lastName}`} />
			<div>
				{firstName} {lastName}
				<button
					className="simpsonButton"
					type="button"
					onClick={() => setCount(count + 1)}
				>
					🍩 {count}
				</button>
			</div>
		</section>
	);
}

export default Avatar;
