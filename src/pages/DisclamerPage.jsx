import React from "react"
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import DisclamerComponent from "../components/DisclamerComponent"

function DisclamerPage() {
	return (
		<div className="mainPage">
			<HeaderComponent />
			<DisclamerComponent />
			<FooterComponent />
		</div>
	)
}

export default DisclamerPage
