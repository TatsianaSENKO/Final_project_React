import { createContext, useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home.jsx"
import Catalog from "./pages/Catalog/Catalog.jsx"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Product from "./pages/Product/Product.jsx"
import Cart from "./pages/Cart/Cart.jsx"

export const MainContext = createContext();

function Main() {


    const [data, setData] = useState([])

    const getData = async () => {
        const dataServer = await fetch('https://c8ee5a49c9c14223a2ff8845d87908c4.api.mockbin.io/')
        .then(response => response.json());

        localStorage.setItem('data', JSON.stringify(dataServer));
        setData([...dataServer]);
    };

    useEffect(() => {
        if (data.length == 0) {
            let dataLocal = localStorage.getItem('data');
            dataLocal = JSON.parse(dataLocal);

            if (dataLocal && dataLocal.length > 0) {
                setData([...dataLocal]);
            } else {
                getData();
            }
        }
    }, [data]);

	return (
        <MainContext.Provider value={data}>
        <main className="main">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog/" element={<Catalog/>}/>
            <Route path="/about/" element={<About/>}/>
            <Route path="/contacts/" element={<Contacts/>}/>
            <Route path="/product/:product_id/" element={<Product/>}/>
            <Route path="/catalog/:category/" element={<Catalog/>}/>
            {/* <Route path="/product/:product_category/:product_id" element={<Product/>}/> */}
            <Route path="/cart/" element={<Cart/>}/>
        </Routes>
        </main>
        </MainContext.Provider>
	)
}

export default Main



