import { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"

import { MainContext } from '../Main';


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import "./RecommendSection.css"

function RecommendSection() {

    const data = useContext(MainContext)

    const { product_id, product_category } = useParams()

    const [recommendProduct, setRecommendProduct] = useState([])

    useEffect(() => {

        if (data.length > 0) {
            let dataTmp = data.filter(item => item.id != product_id)

            let dataRecomend = dataTmp.filter(item => item.subcategory == product_category)

            setRecommendProduct([...dataRecomend])
        }
    }, [data])

    const items = recommendProduct.map((item, index) => {
        return (
            <div key={index} className="catalog__product" style={{background: `url(${item.imageTile}) no-repeat`}}>
                <div className="product__description">
                    <Link className="product__name" to={`/product/${item.subcategory}/${item.id}/`}>{item.name}</Link>
                    <span className="product__price">{item.price} &#8381; </span>
                    <div className="product__category">{item.subcategory}</div>
                    <div className="product__size">{item.size}</div>
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
    <section className="recommendations">
        <div className="container">
        <h3 className="recommendations__title">Вам также может понравиться</h3>
        <div className="recommendations__list">
            <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"/>
        </div>
    </div>
    </section>
)

}

export default RecommendSection