import React, {useState, useEffect} from "react"
import "../stylesheets/MainComponent.css"
import Axios from "axios"

function MainComponent() {
	const [keywordList, setKeywordList] = useState([])
	const [selectedKeyword, setSelectedKeyword] = useState(0)
	const [selectedLanguage, setSelectedLanguage] = useState(0)
	const [selectedOfficial, setSelectedOfficial] = useState("")
	const [pregunta, setPregunta] = useState("")
	const [respuesta, setRespuesta] = useState("")
	const [rullingsActuales, setRullingsActuales] = useState([])
	const [rullingSolicitado, setRullingSolicitado] = useState("")
	const [pageLanguage, setPageLanguage] = useState(1)
	/* Solicita a la base de datos la lista de Keywords en el momento que se carga la pagina */
	useEffect(() => {
		Axios.get("http://localhost:3001/api/keywordList/getEnglish").then(
			(resp) => {
				setKeywordList(resp.data)
			}
		)
	}, [])

	/* Manejo de keyword y lenguaje para formulario */
	const handleKeywordChange = (e) => {
		setSelectedKeyword(parseInt(e.target.value))
		console.log(e.target.value)
	}
	const handleLanguageChange = (e) => {
		setSelectedLanguage(parseInt(e.target.value))
		console.log(e.target.value)
	}
	const handleOfficial = (e) => {
		setSelectedOfficial(e.target.value)
		console.log(e.target.value)
	}
	const handlePregunta = (e) => {
		setPregunta(e.target.value)
		console.log(e.target.value)
	}

	const handleRullingChange = (e) => {
		setRullingSolicitado(parseInt(e.target.value))
		obtenerRulling(e)
		console.log(parseInt(e.target.value))
	}
	const handlePageLanguagechange = (e) => {}
	/* Funcion de envio de formulario */
	//

	const enviarRulling = (e) => {
		e.preventDefault()
		Axios.post("http://localhost:3001/api/sendRulling", {
			keyword: selectedKeyword,
			lenguaje: selectedLanguage,
			oficial: "Yes",
			pregunta: pregunta,
			respuesta: respuesta,
		})
	}

	/* Funcion de Keyword seleccionada */
	const obtenerRulling = (e) => {
		if (pageLanguage === 1) {
			Axios.get("http://localhost:3001/api/getRullings/English", {
				params: {
					keywordSeleccionada: e.target.value,
				},
			}).then((resp) => {
				setRullingsActuales(resp.data)
			})
		}
		if (pageLanguage === 2) {
			Axios.get("http://localhost:3001/api/getRullings/Spanish", {
				params: {
					keywordSeleccionada: e.target.value,
				},
			}).then((resp) => {
				setRullingsActuales(resp.data)
			})
		}
	}

	const setLanguage = (e) => {
		if (pageLanguage === 2) {
			console.log(pageLanguage)
			setPageLanguage(1)
		} else if (pageLanguage === 1) {
			console.log(pageLanguage)
			setPageLanguage(2)
		}
	}

	return (
		<div className="contenedorPrincipal">
			<br />
			<div className="container mainContainer">
				<div className="rullingsContainer ">
					<div className="card mt-2">
						<div className="card-title d-flex justify-content-between">
							<h1 className={"m-4 titleRullings"}>
								{pageLanguage === 1
									? "OFFICIAL RULINGS"
									: "REGLAMENTOS OFICIALES"}
							</h1>
							<div className="d-flex justify-content-between align-items-center">
								<p className="titleRullings m-2">EN</p>
								<label class="switch">
									<input type="checkbox" onClick={setLanguage} />
									<span class="slider"></span>
								</label>
								<p className="titleRullings m-2">ES</p>
							</div>
						</div>
						<div className="card-body">
							<p className={`cardText`}>
								{pageLanguage === 1
									? "# Here you can find all the rulings that are available from official sources. If you want to know more about the Keywords, you can find more info in the Wiki page, the link will be at the bottom of the page. You can find more info in the links at the top of the page."
									: "# Aqui puedes encontrar todos los reglamentos sobre las palabras claves disponibles en la pagina oficial de Digimon. Si quieres saber mas sobre las palabras claves en si, puedes encontrar mas informacion en el link de la Wiki, el link lo dejare en la parte de abajo de la pagina. Puedes encontrar mas informacion sobre este sitio en el link de info de arriba."}
							</p>
							<p className={`cardText`}>
								{pageLanguage === 1
									? "# DISCLAMER: Rulings for [Charge/Raid] are not available in any form yet, I will update those when they get released and translated. Also, rulings for Armor Purge, Save, Material Save and Evade are not available at the moment in the official English site, I will be using the translated versions for those, you can find the source in the Wiki page, I will be leaving the links at the bottom of the page if you want to check them out."
									: "# ADVERTENCIA: Los reglamentos de [Charge/Raid] no se encuentran disponibles todavia, cuando salgan los actualizare. Los rulings de Armor Purge, Save, Material Save y Evade no se encuentran disponibles al momento de manera oficial, usaré las versiones traducidas que se encuentran en la Wiki de Digimon por el momento, dejare el link en la parte de abajo de la pagina."}
							</p>
						</div>
					</div>
				</div>
				{/* Keyword Container */}

				<div className="container-sm mt-2 mb-2 card cardKeywords">
					<div className=" m-3 card-title  d-flex justify-content-center">
						<p className={`cardTitle`}>
							{pageLanguage === 1
								? "Click any of the Keywords to check their rullings!"
								: "Haz click en cualquier Keyword para mostrar sus reglas!"}
						</p>
					</div>
					<div className="container d-flex justify-content-center card-body row containerKeyword">
						{keywordList.map((keyword) => {
							return (
								<div className="col-3 d-flex justify-content-center keywordContainer">
									<button
										onClick={(e) => {
											handleRullingChange(e)
										}}
										key={`keyword${keyword.keyword_id}`}
										id={`keyword${keyword.keyword_id}`}
										className="linkKeyword"
										href="#"
										value={keyword.keyword_id}
									>
										{keyword.keyword_nombre}
									</button>
								</div>
							)
						})}
					</div>
				</div>

				{/* Rullings Container */}
				{rullingsActuales.map((rulling) => {
					return (
						<div className="card mt-2 ">
							<div className="card-title cardTitle m-3">{rulling.question}</div>
							<div className="card-body mt-3 cardText border">
								{rulling.answer}
							</div>
						</div>
					)
				})}
				<br />
			</div>
		</div>
	)
}

export default MainComponent

/* 

*/
