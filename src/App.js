import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import MainComponent from "./components/MainComponent"
function App() {
	return (
		<div className="App">
			<HeaderComponent />
			<MainComponent />
			<FooterComponent />
		</div>
	)
}

export default App
