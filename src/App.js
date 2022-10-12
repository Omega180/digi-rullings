import {Routes, Route} from "react-router-dom"
import "../src/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import KeywordPage from "./pages/KeywordPage"
import DisclamerPage from "./pages/DisclamerPage"
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<KeywordPage />} />
				<Route path="disclamer" element={<DisclamerPage />} />
			</Routes>
		</div>
	)
}

export default App
