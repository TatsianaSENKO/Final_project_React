import { createContext, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"

import Header from "./layouts/Header/Header"
import Footer from "./layouts/Footer/Footer"
import Main from "./components/Main"

import './css/style.css'
// import './css/media.css'

export const AppContext = createContext()

function App() {

	const [cart, setCart] = useState([])

    const cartAdd = (product) => {
        const cartTmp = cart

        let item = cartTmp.find((item) => {
            if (item.size == product.size) return +item.id == +product.id
        });

        if (item) {
            item.quantity = ++item.quantity
        } else {
            item = { id: product.id, name: product.name, image: product.image, size: product.size, price: product.price, quantity: 1 }
            cartTmp.push(item)
        }

        setCart([...cartTmp])
        localStorage.setItem('cart', JSON.stringify(cartTmp))
    }

	useEffect( () => {
		if (cart.length == 0) {
            let cartDataLocal = localStorage.getItem('cart');
            cartDataLocal = JSON.parse(cartDataLocal);

            if (cartDataLocal && cartDataLocal.length > 0) setCart([...cartDataLocal]);
        }
	}, [cart])

	return (

		<>
			<AppContext.Provider value={{cart, setCart, cartAdd}}>
			<BrowserRouter>
			<Header/>
			<Main/>
			<Footer/>
			</BrowserRouter>
			</AppContext.Provider>
		</>
	)
}

export default App
