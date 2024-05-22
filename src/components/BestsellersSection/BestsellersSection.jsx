import { useContext, useEffect, useState } from 'react'

import { Link } from "react-router-dom"

import { MainContext } from '../Main';


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import "./BestsellersSection.css"

function BestsellersSection() {

    const data = useContext(MainContext)

    const [bestProducts, setBestProducts] = useState([])

    useEffect(() => {

        if (data.length > 0) {
            let dataTmp =  data.slice(0, 5)

            setBestProducts([...dataTmp])
        }

    }, [data])

    const items = bestProducts.map((item, index) => {
        return (
        <div key={index} className="bestproducts__item" style={{background: `url(${item.imageTile}) no-repeat`}} data-value={index}>
            <h3 className="bestproducts__title">{item.name}</h3>
            <span className="bestproducts__category">{item.subcategory}</span>
            <Link className="bestproducts__btn" to={`/product/${item.id}/`}>Подробнее</Link>
        </div>
        )
        })

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    }

return (
    <section className="bestsellers">
        <div className="container">
        <div className="bestsellers__row">
            <div className="bestsellers__content">
                <h3 className="bestsellers__title">Бестселлеры</h3>
                <p className="bestsellers__text">Легендарные продукты, завоевавшие любовь наших клиентов</p>
                <Link className="btn bestsellers__btn" to="/catalog/">Смотреть все</Link>
            </div>
            <AliceCarousel
            mouseTracking
            autoWidth={true}
            disableDotsControls={true}
            infinite={true}
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"/>
            <Link className="btn bestsellers__btn-none" to="/catalog/">Смотреть все</Link>
        </div>
    </div>
    </section>
)

}

export default BestsellersSection