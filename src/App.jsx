import { BrowserRouter } from "react-router-dom"

import Header from "./layouts/Header/Header"
import Footer from "./layouts/Footer/Footer"
import Main from "./components/Main"

import './css/style.css'
import './css/media.css'

function App() {


	return (
		<>
			<BrowserRouter>
			<Header/>
			<Main/>
			<Footer/>
			</BrowserRouter>
		</>
	)
}

export default App
