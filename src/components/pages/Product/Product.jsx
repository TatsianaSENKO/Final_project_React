import { useContext, useEffect, useState } from 'react';

import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom"

import * as Accordion from '@radix-ui/react-accordion'
import { AccordionContent } from '@radix-ui/react-accordion'
import { AccordionTrigger } from '@radix-ui/react-accordion'

import { AppContext } from '../../../App'
import { MainContext } from '../../Main'
import RecommendSection from "../../RecommendSection/RecommendSection.jsx"

import "./Product.css"

function Product() {

    const {cartAdd} = useContext(AppContext)

    const data = useContext(MainContext)

    const { product_id, product_category } = useParams()

    const [dataProduct, setDataProduct] = useState([])

    const [product, setProduct] = useState({})

    const [selectedSize, setSelectedSize] = useState()

    const addToCatalogViewed = (product) => {
        const catalogViewed = JSON.parse(localStorage.getItem('dataViewed')) || []

        // Проверяем, был ли товар уже просмотрен
        const existingProductIndex = catalogViewed.findIndex((p) => p.id === product.id)
        // Если товар уже есть в истории, удаляем его сначала
        if (existingProductIndex !== -1) {
          catalogViewed.splice(existingProductIndex, 1)
        }
        // Добавляем новый товар в начало списка
        if (Object.keys(product).length > 0) {
            catalogViewed.unshift(product)
        }
        // Ограничиваем список недавно просмотренных товаров до, например, 10 элементов
        if (catalogViewed.length > 10) {
          catalogViewed.pop();
        }
        // Сохраняем обновленный список в local storage
        localStorage.setItem('dataViewed', JSON.stringify(catalogViewed))
      }

    useEffect(() => {
        if (data.length > 0) {
            const product = data.find((item) => {
                return item.id == product_id
            });

            if (product.id) setProduct(product)
        }

        if (product != 0 & data.length > 0) {
            const product = data.find((item) => {
                return item.id == product_id
            })
            let dataProductTmp = data.filter(item => item.name == product.name)

            setDataProduct([...dataProductTmp])
        }

    }, [data])

    useEffect(() => {

        if (product != 0 & data.length > 0) {
            let dataProductTmp = data.filter(item => item.name == product.name)

            setDataProduct([...dataProductTmp])

            addToCatalogViewed(product)

        }

    }, [product])

    addToCatalogViewed(product)

    const productSizePrice = (size) => {

        let productSize = dataProduct.find ((item) => {
            return item.countSize == size
        })

        if (productSize) return productSize.price

    }

    const productSizeId = (size) => {

        let productSize = dataProduct.find ((item) => {
            return item.countSize == size
        })

        if (productSize) return productSize.id

    }


	return (
        <>
        <div className="page-product">
                <div className="container">
                    <div className="page-product__image"><img src={product.imagePage} alt={product.name} /></div>
                    <div className="page-product__info">
                        <h3 className="page-product__name">{product.name}</h3>
                        <span className="page-product__category">{product.subcategory}</span>
                        <p className="page-product__description">{product.description}</p>
                        <Accordion.Root className="accordion__root" type="multiple">
                            <Accordion.Item className="accordion__item" value="item-1">
                                <AccordionTrigger className="accordion__title">
                                    <span>Состав</span>
                                    <span className="accordion__icon"></span>
                                </AccordionTrigger>
                                <AccordionContent className="accordion__content">{product.composition}</AccordionContent>
                            </Accordion.Item>
                            <Accordion.Item className="accordion__item" value="item-2">
                                <AccordionTrigger className="accordion__title">
                                <span>Способ применения</span>
                                <span className="accordion__icon"></span>
                                </AccordionTrigger>
                                <AccordionContent className="accordion__content">{product.use}</AccordionContent>
                            </Accordion.Item>
                        </Accordion.Root>

                        <ul className="page-product__size">
                            <h3 className="size__title">Объем:</h3>
                            {dataProduct.map((item, index) => {
                            return (
                                <li key={index} className="size__item">
                                    <input type="radio"
                                    id={`size${item.countSize}`}
                                    name="size"
                                    value={item.countSize}
                                    onChange={(event) => setSelectedSize(event.target.value)}
                                    />
                                    <label htmlFor={`size${item.countSize}`}>{item.size}</label>
                                </li>
                            )
                            })}
                            {/* defaultChecked */}
                        </ul>
                        <div className="page-product__pr">

                            <span className="page-product__price">
                            {productSizePrice(selectedSize)}  &#8381;
                            </span>

                            <button className="btn btn__cart-add" onClick={() => { cartAdd(productSizeId(selectedSize)) }}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
        </div>

        <RecommendSection />

        </>
	)
}

export default Product
