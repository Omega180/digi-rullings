import React from "react"
import "../stylesheets/HeaderComponent.css"
import logo from "../imgs/logoexample.png"
import {Link} from "react-router-dom"
function HeaderComponent() {
	return (
		<header>
			<nav
				id="navbar"
				className="navbar navbar-expand-lg bg-light navBarPrincipal d-flex justify-content-between p-1"
			>
				<div className="container-fluid d-flex justify-content-between navBarContainer">
					<div className="logoTitleContainer d-flex justify-content-center align-items-center">
						<Link to="/" className="navbar-brand  navbarLogo">
							<img src={logo} className="mainLogo" alt="" />
						</Link>
						<h1 className="title mt-2">Digi-Rulings</h1>
					</div>

					<div className="navbar-nav divBotones">
						<Link
							to="/"
							className="buttonClass d-flex justify-content-center nav-link active"
						>
							Keywords
						</Link>
						<Link
							to="/disclamer"
							className="buttonClass d-flex justify-content-center nav-link active"
						>
							Info
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}
export default HeaderComponent
