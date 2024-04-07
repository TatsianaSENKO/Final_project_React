import * as Accordion from '@radix-ui/react-accordion'
import { AccordionContent } from '@radix-ui/react-accordion'
import { AccordionTrigger } from '@radix-ui/react-accordion'

import "./Product.css"

function Product() {

	return (
        <>
        <div className="page-product">
                <div className="container">
                    <div className="page-product__image"><img src="/src/img/rose_page-product.png" alt="Rose" /></div>
                    <div className="page-product__info">
                        <h3 className="page-product__name">Rose</h3>
                        <span className="page-product__category">крем для лица</span>
                        <p className="page-product__description">Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток. </p>
                        <Accordion.Root className="accordion__root" type="multiple">
                            <Accordion.Item className="accordion__item" value="item-1">
                                <AccordionTrigger className="accordion__title">
                                    <span>Состав</span>
                                    <span className="accordion__icon"></span>
                                </AccordionTrigger>
                                <AccordionContent className="accordion__content">Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.</AccordionContent>
                            </Accordion.Item>
                            <Accordion.Item className="accordion__item" value="item-2">
                                <AccordionTrigger className="accordion__title">
                                <span>Способ применения</span>
                                <span className="accordion__icon"></span>
                                </AccordionTrigger>
                                <AccordionContent className="accordion__content">Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.</AccordionContent>
                            </Accordion.Item>
                        </Accordion.Root>
                        <div className="page-product__size">
                            <h3 className="size__title">Объем:</h3>
                            <input type="radio" id="size50" name="size" value="50" defaultChecked/>
                            <label htmlFor="size50">50ml</label>
                            <input type="radio" id="size30" name="size" value="30" />
                            <label htmlFor="size30">30ml</label>
                        </div>
                        <div className="page-product__pr">
                            <span className="page-product__price">890&#8381;</span>
                            <button className="btn btn__cart-add">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
        </div>
        <section className="recommendations">
            <div className="container">
                <h3 className="recommendations__title">Вам также может понравиться</h3>
                <ul className="recents__list">
                        <li className="catalog__product">
                        <div className="product__description">
                            <a className="product__name" href="/product/">Product</a>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <a className="product__name" href="/product/">Product</a>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <a className="product__name" href="/product/">Product</a>
                            <span className="product__price">10 &#8381; </span>
                            <div className="product__category">крем</div>
                            <div className="product__size">30ml</div>
                        </div>
                    </li>
                    <li className="catalog__product">
                        <div className="product__description">
                            <a className="product__name" href="/product/">Product</a>
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
        </>
	)
}

export default Product
