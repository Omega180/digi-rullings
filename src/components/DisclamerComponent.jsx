import React, {useState} from "react"
import "../stylesheets/DisclamerComponent.css"
import {useLocation} from "react-router-dom"

function DisclamerComponent(props) {
	const [pageLanguage, setPageLanguage] = useState(1)
	const setLanguage = (e) => {
		if (pageLanguage === 2) {
			console.log(pageLanguage)
			setPageLanguage(1)
		} else if (pageLanguage === 1) {
			console.log(pageLanguage)
			setPageLanguage(2)
		}
	}
	const location = useLocation()
	const {from} = location.state

	return (
		<div className="container-fluid d-flex justify-content-center disclamerContainer">
			<div className="container-fluid contenedorPrincipal">
				<br />
				<div className="title "></div>
				<div className="container-sm containerText">
					<div className="card">
						<div className="card-title  d-flex justify-content-between align-items-center">
							<p className="ms-3 mt-2">
								<h1 className="fontTitle d-flex justify-content-center">
									{pageLanguage === 1
										? "Info and Links"
										: "Informacion y enlaces"}
								</h1>
							</p>
							<div className="d-flex justify-content-center align-items-center">
								<p className="titleRulings m-2">EN</p>
								<label class="switch">
									<input type="checkbox" onClick={setLanguage} />
									<span class="slider"></span>
								</label>
								<p className="titleRulings m-2">ES</p>
							</div>
						</div>
						<div
							className="card-body 
						"
						>
							<p className="disclamerText">
								{pageLanguage === 1
									? `-This page is my first decent-ish size project, so if something
									stops working for a few days or something, sorry! send me a
									message at my twitter page which you can find at the bottom of the page
									or send me a email at digi.rullings.site@gmail.com I will try to
									fix it as soon as possible!`
									: `- Esta pagina es mi primer proyecto de tamaño decente, asi que
									si algo deja de funcionar por favor enviame un mensaje a mi pagina de twitter https://twitter.com/DigiRulings
									o enviame un email a digi.rulings.site@gmail.com, tratare de
									arreglarlo lo mas rapido posible!`}
							</p>
							<p className="disclamerText">
								{pageLanguage === 1
									? `- This page is pretty much a mirror of the official Q&A file
									located in the official Digimon Card Game page, including the translated rulings from the wiki
									(since we still dont have translation for a few keywords). This
									site was made for easy access for myself and my community.`
									: `- Esta pagina es una traduccion de los reglamentos oficiales que se encuentran en la pagina oficial de Digimon, incluyendo traducciones de los reglamentos que se encuentra en la wiki (ya que no tenemos traduccion oficial de esos rulings), esta pagina fue hecha para mi y mi comunidad local`}
							</p>
							<p className="disclamerText">
								{pageLanguage === 1
									? "- All the rulings are manually inputted, so if there's a ruling change in the official site, I will try to update it as soon as possible."
									: "- Todos los reglamientos se ingresan de manera manual, asi que si hay algun cambio de algun reglamento, tratare de actualizarlo de la manera mas rapida posible"}
							</p>
							<p className="disclamerText">
								{pageLanguage === 1
									? "- IF you are using this website to check rulings during a local tournament, play it safe and ask your judge, while all the info here is taken directly from official sources, I would recommend you get a ruling directly from your local judge. I'm not responsible for any misunderstanding caused by misunderstanding any rulings."
									: "- SI estas usando esta pagina para revisar alguna regla durante un torneo local, te recomendaria que le preguntaras directamente a tu juez, aunque toda la informacion de aca viene directamente de la pagina de bandai, igual te recomendaria que le preguntaras a tu juez local. No me hago responsable de cualquier malentendido que sea generado por no entender los funcionamientos de alguna palabra clave."}
							</p>
							<p className="disclamerText">
								{pageLanguage === 1
									? "- If you are unsure about a specific rulling and can't ask a local judge I 100% recommend you visiting the Wiki or the Digimon TCG 2020 Discord, there's a ton of really specific rulings you can find in the #tcg-rules-and-faqs channel !"
									: "- Si no estas seguro de algun reglamento especifico o alguna interaccion y no puedes preguntarle a algun juez local, te recomendaria que visitaras la wiki o el discord de Digimon TCG 2020, en el canal de #tcg-rules-and-faqs tienen bastantes interacciones especificas (eso si, ambas paginas estan en ingles, asi que ten eso en cuenta)"}
							</p>
							<p className="disclamerText">
								{pageLanguage === 1
									? "- Check these links for more info:"
									: "- Revisa estos links para mas informacion, recuerda que estan en Ingles."}
							</p>
							<div>
								<a
									className="disclamerText"
									href="https://world.digimoncard.com/rule/pdf/general_rules.pdf?210521"
								>
									The Official General rules Q&A File
								</a>
								<br />
								<a
									className="disclamerText"
									href="https://digimoncardgame.fandom.com/wiki/Keywords"
								>
									The Digimon Card Game Wiki - Keywords Page
								</a>
								<br />
								<a
									href="https://digimoncardgame.fandom.com/wiki/Category:Rulings"
									className="disclamerText"
								>
									The Digimon Card Game Wiki - Rulings Page
								</a>
								<br />
								<a
									href="https://discord.gg/RZKmtHV7GW"
									className="disclamerText"
								>
									Digimon TCG 2020 Discord
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DisclamerComponent
