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
	const [pageLanguage, setPageLanguage] = useState("")
	let resultados = [
		{
			id: 1,
			question: "Can I use Gaia Force on Koromon?",
			answer: "No, you cannot interact with the raising area",
		},
		{
			id: 2,
			question: "Can I use Gaia Force on Koromon?",
			answer: "No, you cannot interact with the raising area",
		},
		{
			id: 3,
			question: "Can I use Gaia Force on Koromon?",
			answer: "No, you cannot interact with the raising area",
		},
		{
			id: 4,
			question: "Can I use Gaia Force on Koromon?",
			answer: "No, you cannot interact with the raising area",
		},
		{
			id: 4,
			question: "Can I use Gaia Force on Koromon?",
			answer: "No, you cannot interact with the raising area",
		},
	]
	useEffect(() => {
		Axios.get("http://localhost:3001/api/keywordList/getEnglish").then(
			(resp) => {
				setKeywordList(resp.data)
			}
		)
	}, [])
	const sayHello = (e) => {
		console.log(e)
		setSelectedKeyword(e.target.id)
	}

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
		Axios.get("http://localhost:3001/api/getRullings/", {
			params: {
				keywordSeleccionada: e.target.value,
			},
		}).then((resp) => {
			setRullingsActuales(resp.data)
		})
	}

	const prueba = (e) => {
		console.log(e.target.value)
	}
	return (
		<div className="contenedorPrincipal">
			<div className="container mainContainer">
				{/* Keyword Container */}

				<div className="card cardKeywords">
					<div className=" m-3 card-title cardTitle d-flex justify-content-between">
						<p>Click any of the Keywords to check their rullings!</p>
						<div className="d-flex justify-content-between">
							<p className="d-flex  justify-content-center">EN</p>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider"></span>
							</label>
							<p>ES</p>
						</div>
					</div>
					<div className="card-body row containerKeyword">
						{keywordList.map((keyword) => {
							return (
								<div className="col-2 keywordContainer">
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

				{/* Form Container */}

				<div className="formularioAgregar m-3">
					<div className="card p-3">
						<form>
							<div className="form-group">
								<label htmlFor="exampleformlanguage">Lenguaje</label>
								<select
									onChange={handleLanguageChange}
									className="form-control"
									name="language"
									id="exampleformlanguage"
								>
									<option value="novalue" selected>
										Selecciona un Lenguaje
									</option>
									<option value="1">Ingles</option>
									<option value="2">Español</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="exampleformkeyword">Keyword</label>
								<select
									onChange={handleKeywordChange}
									className="form-control"
									name="keyword"
									id="exampleformkeyword"
								>
									<option value="novalue" selected>
										Selecciona una keyword
									</option>
									{keywordList.map((keyword) => {
										return (
											<option value={keyword.keyword_id}>
												{keyword.keyword_nombre}
											</option>
										)
									})}
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="exampleformofficial">Official?</label>
								<select
									onChange={handleOfficial}
									className="form-control"
									name="oficial"
									id="exampleformkeyword"
								>
									<option value="novalue" selected>
										Seleccione una opcion
									</option>
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="exampleformQuestion">Question</label>
								<input
									onChange={handlePregunta}
									type="text"
									className="form-control"
									id="exampleformQuestion"
									placeholder="puedo usar gaia force en koromon?"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleformAnswer">Answer</label>
								<input
									onChange={(e) => {
										setRespuesta(e.target.value)
									}}
									type="text"
									className="form-control"
									id="exampleformAnswer"
									placeholder="no"
								/>
							</div>
							<button onClick={enviarRulling} className="btn btn-primary mt-3">
								Submit
							</button>
						</form>
					</div>
				</div>

				{/* Rullings Container */}

				<div className="rullingsContainer ">
					<div className="card mt-2">
						<div className="card-title">
							<h1 className="m-4 titleRullings">OFFICIAL RULLINGS</h1>
						</div>
						<div className="card-body">
							<p className="cardText">
								# Here you can find all the rullings that are available from
								official sources. If you want to know more about the Keywords,
								you can find more info at the Fandom page, the link will be at
								the bottom of the page.
							</p>

							<p className="cardText">
								# DISCLAMER: Rullings for Charge/Raid are not available in any
								form yet, I will update those when they get released and
								translated. Also, rullings for Armor Purge, Save, Material Save
								and Evade are not available at the moment in the official
								English site, I will be using the translated versions for those,
								you can find the source in the fandom page, I will be leaving
								the links at the bottom of the page if you want to check them
								out.
							</p>
						</div>
					</div>
					{rullingsActuales.map((rulling) => {
						return (
							<div className="card mt-3 ">
								<div className="card-title cardTitle m-3">
									{rulling.question}
								</div>
								<div className="card-body mt-3 cardText border">
									{rulling.answer}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default MainComponent

/* 

*/
