function Contact({ formulaire, setFormulaire }) {
	return (
		<div className="contact">
			<hr />
			<button
				type="button"
				onClick={() => setFormulaire(!formulaire)}
			>
				<h4>Nous contacter</h4>
			</button>

			{formulaire && (
				<form>
					<label>
						Nom :
						<input type="text" placeholder="Tapez votre nom..." />
					</label>
					<label>
						Prénom :
						<input type="text" placeholder="Tapez votre prénom..." />
					</label>
					<label>
						Numéro de téléphone :
						<input type="text" placeholder="Tapez votre numéro de téléphone..." />
					</label>
					<label>
						Adresse mail :
						<input type="email" placeholder="Tapez votre email..." />
					</label>
					<label>
						Message :
						<input type="text" placeholder="Laissez votre message..." />
					</label>
					<div>
						<button
							type="submit"
							className="contactButton"
							onClick={(e) => {
								e.preventDefault();
								alert("Message envoyé !");
							}}
						>
							Envoyer !
						</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default Contact;
