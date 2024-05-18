import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState, useMemo, useCallback } from 'react'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { MainContext } from '../../Main'

import Subscription from "../../Subscription/Subscription"
import ContactsSection from "../../ContactsSection/ContacsSection"
import Filter from '../../Filter/Filter'
import CatalogViewedSection from "../../CatalogViewedSection/CatalogViewedSection.jsx"



import "./Catalog.css"

function Catalog() {

    const COMPLETE_FILTER = {
        CreamFace: "creamFace",
        MaskFace: "maskFace",
        PowderFace: "powderFace",
        TonicFace: "tonicFace",
        CreamBody: "creamBody",
        OilBody: "oilBody",
        ScrubBody: "scrubBody",
        All: "all"
      }

    const data = useContext(MainContext)

    const { category } = useParams()

    const [openFilter, setOpenFilter] = useState()

    const [dataCatalogFilter, setDataCatalogFilter] = useState([])

    const [filter, setFilter] = useState(COMPLETE_FILTER.All)

    const [dataSlaider, setDataSlaider] = useState([])

    const CatalogList = () => {

        setDataCatalogFilter([...data])
        setOpenFilter ()
    }

    const CatalogListFilter = () => {

        setDataCatalogFilter([...filteredTodos])
        setOpenFilter ()
    }

    useEffect(() => {

        setDataCatalogFilter([...data])

    }, [data])

    const getfilteredTodos = (list, curFilter = COMPLETE_FILTER.All) => {

        return list.filter((item) => item.categoryFilter === curFilter)

    }

    const filteredTodos = useMemo(() => getfilteredTodos(data, filter), [filter])

    const handleFilterUpdate = useCallback((newFilter) => {
        setFilter(newFilter);
    }, [])

    function partData (array, size) {
        const partedArray = []

        for (let i = 0; i < array.length; i += size) {
            partedArray.push(array.slice(i, i + size))
        }
        return partedArray
    }

    useEffect(() => {

        const partSize = 12

        console.log (dataCatalogFilter)

        if (category == 'facial care') {
            const dataCatalogFilterTmp = dataCatalogFilter.filter(item => item.category == 'Уход для лица')

            console.log(dataCatalogFilterTmp)

            const dataSlaiderTmp = partData (dataCatalogFilterTmp, partSize)

            setDataSlaider([...dataSlaiderTmp])

        } else if (category == 'body care') {
            const dataCatalogFilterTmp = dataCatalogFilter.filter(item => item.category == 'Уход для тела')

            console.log(dataCatalogFilterTmp)

            const dataSlaiderTmp = partData (dataCatalogFilterTmp, partSize)

            setDataSlaider([...dataSlaiderTmp])
        } else {

            const dataSlaiderTmp = partData (dataCatalogFilter, partSize)

            setDataSlaider([...dataSlaiderTmp])
        }

    }, [dataCatalogFilter])

    const items = dataSlaider.map((list, index) => {
        return (
            <div key={index} className="catalog__list">
                {list.map((item, index) => {
                        return (
                        <div key={index} className="catalog__product" style={{background: `url(${item.imageTile}) no-repeat`}}>
                            <div className="product__description">
                                <Link className="product__name" to={`/product/${item.id}/`}>{item.name}</Link>
                                <span className="product__price">{item.variants[0].price} &#8381; </span>
                                <div className="product__category">{item.subcategory}</div>
                                <div className="product__size">{item.variants[0].size}</div>
                            </div>
                        </div>
                        )
                    })}
            </div>
        )
        })


    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    }

	return (
        <>
        <Filter active={openFilter} curFilter={filter} updateFilter={handleFilterUpdate} listFilter={CatalogListFilter} resetFilter={CatalogList} category={category}/>

        <section className="catalog">
            <div className="container">
                <div className="catalog__header">
                    <h3 className="catalog__title">Каталог</h3>
                    <button className={`btn btn-filter ${openFilter}`} onClick={() => setOpenFilter ('active')}>Фильтр</button>
                    <button className={`btn btn-filter none ${openFilter}`} onClick={() => setOpenFilter ()}>X</button>
                </div>

                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"/>
            </div>
        </section>

        <CatalogViewedSection/>
        <Subscription />
        <ContactsSection />
        </>
    )
}

export default Catalog
