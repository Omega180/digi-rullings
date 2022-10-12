import React from "react"
import "../stylesheets/FooterComponent.css"

function FooterComponent() {
	return (
		<footer className="footer d-flex justify-content-between align-items-center">
			<div className="container d-flex justify-content-between align-items-center linksContainer">
				<a href="https://world.digimoncard.com/" className="linkText">
					Official Digimon Card Game website
				</a>
				<a
					className="linkText"
					href="https://world.Digimoncard.com/rule/pdf/general_rules.pdf?210521"
				>
					Official Rullings in English
				</a>
				<a
					className="linkText"
					href="https://digimoncardgame.fandom.com/wiki/DigimonCardGame_Wiki"
				>
					The Digimon Card Game Wiki
				</a>
				<a className="linkText" href="https://twitter.com/DigiRulings">
					My Twitter Account
				</a>
			</div>
			<div className="contactFooter"></div>
		</footer>
	)
}

export default FooterComponent
