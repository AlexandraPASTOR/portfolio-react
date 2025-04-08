interface PortfolioProps {
	projet: string;
}

function Portfolio({ projet }: PortfolioProps) {
	return (
		<div>
			<h3>Projet : {projet}</h3>
		</div>
	);
}

export default Portfolio;
