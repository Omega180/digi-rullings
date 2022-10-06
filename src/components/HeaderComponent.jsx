import React from "react"
import "../stylesheets/HeaderComponent.css"
import logo from "../imgs/logoexample.png"
function HeaderComponent() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-light navBarPrincipal d-flex justify-content-between">
				<div className="container-fluid d-flex justify-content-between navBarContainer">
					<a href="#" className="navbar-brand">
						<img src={logo} className="mainLogo" alt="" />
					</a>
					<h5 className="title">DigiRullings</h5>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse d-flex justify-content-end"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav divBotones">
							<a href="#" className="buttonClass nav-link active">
								Keywords
							</a>
							<a href="#" className="buttonClass nav-link active">
								Disclamer
							</a>
							<a href="#" className="buttonClass nav-link active">
								Changelog
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}
export default HeaderComponent
