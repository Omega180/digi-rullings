import React from "react"
import "../stylesheets/HeaderComponent.css"
import logo from "../imgs/logoexample.png"
import {Link} from "react-router-dom"
function HeaderComponent() {
	window.onscroll = function () {
		scrollFunction()
	}
	const navbar = document.getElementsByClassName(".navbar")
	const sticky = navbar.offsetTop

	function scrollFunction() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky")
		}
	}

	return (
		<header>
			<nav
				id="navbar"
				className="navbar navbar-expand-lg bg-light navBarPrincipal d-flex justify-content-between p-1"
			>
				<div className="container-fluid d-flex justify-content-between navBarContainer">
					<a href="#" className="navbar-brand">
						<img src={logo} className="mainLogo" alt="" />
					</a>
					<h5 className="title">Digi-Rulings</h5>
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
				</div>
			</nav>
		</header>
	)
}
export default HeaderComponent
