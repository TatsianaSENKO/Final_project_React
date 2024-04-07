import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home.jsx"
import Catalog from "./pages/Catalog/Catalog.jsx"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Product from "./pages/Product/Product.jsx"

function Main() {

	return (
        <main className="main">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog/" element={<Catalog/>}/>
            <Route path="/about/" element={<About/>}/>
            <Route path="/contacts/" element={<Contacts/>}/>
            <Route path="/product/" element={<Product/>}/>
        </Routes>
        </main>
	)
}

export default Main
