import { useEffect, useState } from 'react'

import { Link } from "react-router-dom"

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import "./CatalogViewedSection.css"

function CatalogViewedSection() {


    const [catalogViewed, setCatalogViewed] = useState([])

    useEffect(() => {
        const dataCatalogViewed = JSON.parse(localStorage.getItem('dataViewed')) || []
        setCatalogViewed(dataCatalogViewed)
      }, [])

    const items = catalogViewed.map((item, index) => {

        return (
        <div key={index} className="catalog__product" style={{background: `url(${item.imageTile}) no-repeat`}}>
            <div className="product__description">
                <Link className="product__name" to={`/product/${item.id}/`}>{item.name}</Link>
                <span className="product__price">{item.variants ? item.variants[0].price : null} &#8381; </span>
                <div className="product__category">{item.subcategory}</div>
                <div className="product__size">{item.variants ? item.variants[0].size : null}</div>
            </div>
        </div>
        )
        })

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    }

return (
    <section className="viewed">
        <div className="container">
        <h3 className="viewed__title">Вы недавно смотрели</h3>
        <div className="viewed__list">
            <AliceCarousel
            mouseTracking
            autoWidth={true}
            disableDotsControls={true}
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"/>
        </div>
    </div>
    </section>
)
}

export default CatalogViewedSection