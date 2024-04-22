import { createContext, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"

import Header from "./layouts/Header/Header"
import Footer from "./layouts/Footer/Footer"
import Main from "./components/Main"

import './css/style.css'
import './css/media.css'

export const AppContext = createContext()

function App() {

	const [cart, setCart] = useState([])

    const cartAdd = (id) => {
        const cartTmp = cart;

        let item = cartTmp.find((item) => {
            return +item.id == +id
        });

        if (item) {
            item.quantity = ++item.quantity
        } else {
            item = { id: id, quantity: 1 }
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
