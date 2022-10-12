import React from "react"
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import MainComponent from "../components/MainComponent"

function KeywordPage() {
	return (
		<div className="mainPage">
			<HeaderComponent />
			<MainComponent />
			<FooterComponent />
		</div>
	)
}

export default KeywordPage
