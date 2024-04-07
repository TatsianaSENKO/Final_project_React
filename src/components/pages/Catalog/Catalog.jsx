import { Link } from "react-router-dom"

import Subscription from "../../Subscription/Subscription"
import ContactsSection from "../../ContactsSection/ContacsSection"

import "./Catalog.css"

function Catalog() {
	return (
        <>
        <section className="catalog">
            <div className="container">
                <div className="catalog__header">
                    <h3 className="catalog__title">Каталог</h3>
                    <button className="btn btn-filter">Фильтр</button>
                </div>
                <ul className="catalog__list">
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                </ul>
                <div className="catalog__btns">
                    <div className="pagination">
                        <span className="current__number">1</span>
                        <span className="total__number">8</span>
                    </div>
                    <div className="arrows__btns">
                        <a href="#" className="arrow">
                            <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 7H0.999999M0.999999 7L7.30303 1M0.999999 7L7.30303 13" stroke="#122947"/>
                            </svg>
                        </a>
                        <a href="#" className="arrow">
                            <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="recents">
            <div className="container">
                <h3 className="recents__title">Вы недавно смотрели</h3>
                <ul className="recents__list">
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <Link className="product__name" to="/product/">Product</Link>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                </ul>
                <div className="catalog__btns">
                    <div className="pagination">
                        <span className="current__number">1</span>
                        <span className="total__number">3</span>
                    </div>
                    <div className="arrows__btns">
                        <a href="#" className="arrow">
                            <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 7H0.999999M0.999999 7L7.30303 1M0.999999 7L7.30303 13" stroke="#122947"/>
                            </svg>
                        </a>
                        <a href="#" className="arrow">
                            <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Subscription />
        <ContactsSection />
        </>
    )
}

export default Catalog
