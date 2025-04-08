function Contact() {
	return (
		<div className="contact">
			<hr />
			<h4>Nous contacter</h4>
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
					onClick={() => alert("Message envoyé!")}
				>
					Envoyer !
				</button>
			</div>
		</div>
	);
}

export default Contact;
