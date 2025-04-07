interface PortfolioProps {
	projet: string;
	imgProjet: string;
}

function Portfolio({ projet, imgProjet }: PortfolioProps) {
	return (
		<div>
			<h3>Projet : {projet}</h3>
			<img className="imgProject" src={imgProjet} alt={projet} />
		</div>
	);
}

export default Portfolio;
