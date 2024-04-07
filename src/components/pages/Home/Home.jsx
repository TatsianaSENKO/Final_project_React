import AboutSection from "../../AboutSection/AboutSection.jsx"
import Subscription from "../../Subscription/Subscription.jsx"
import ContactsSection from "../../ContactsSection/ContacsSection.jsx"

import "./Home.css"

function Home() {

	return (
        <>
        <section className="promo">
        <div className="container">
            <div className="promo__img promo__img-left">
                <img src="src/img/promo_img_left.png" alt="Facial_care" />
                <div className="promo__img-info">
                    <a className="promo__img-title" href="#">Уход для лица</a>
                    <a className="promo__img-btn" href="#"><svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                    </svg>
                    </a>
                </div>
            </div>
            <div className="promo__content">
                <h1 className="promo__title">MAROON</h1>
                <p className="promo__text">Натуральная косметика
                    для бережного ухода за кожей</p>
                    <a className="btn" href="#">Подробнее</a>
            </div>
            <div className="promo__img promo__img-right">
                <img src="src/img/promo_img_right.png" alt="Facial_care" />
                <div className="promo__img-info">
                    <a className="promo__img-title" href="#">Уход для тела</a>
                    <a className="promo__img-btn" href="#"><svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section className="bestsellers">
        <div className="container">
            <div className="bestsellers__row">
                <div className="bestsellers__content">
                    <h3 className="bestsellers__title">Бестселлеры</h3>
                    <p className="bestsellers__text">Легендарные продукты, завоевавшие любовь наших клиентов</p>
                    <a className="btn bestsellers__btn" href="#">Смотреть все</a>
                </div>
                <div className="bestsellers__bestproducts">
                    <ul className="bestproducts__list">
                        <li className="bestproducts__item">
                            <h3 className="bestproducts__title">High</h3>
                            <span className="bestproducts__category">крем для лица</span>
                            <a className="bestproducts__btn" href="#">Подробнее</a>
                        </li>
                        <li className="bestproducts__item">
                            <h3 className="bestproducts__title">High</h3>
                            <span className="bestproducts__category">крем для лица</span>
                            <a className="bestproducts__btn" href="#">Подробнее</a>
                        </li>
                        <li className="bestproducts__item">
                            <h3 className="bestproducts__title">High</h3>
                            <span className="bestproducts__category">крем для лица</span>
                            <a className="bestproducts__btn" href="#">Подробнее</a>
                        </li>
                        <li className="bestproducts__item">
                            <h3 className="bestproducts__title">High</h3>
                            <span className="bestproducts__category">крем для лица</span>
                            <a className="bestproducts__btn" href="#">Подробнее</a>
                        </li>
                        <li className="bestproducts__item">
                            <h3 className="bestproducts__title">High</h3>
                            <span className="bestproducts__category">крем для лица</span>
                            <a className="bestproducts__btn" href="#">Подробнее</a>
                        </li>
                    </ul>
                </div>
                <div className="arrows__btns-none">
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
                <a className="btn bestsellers__btn-none" href="#">Смотреть все</a>
            </div>
            <div className="arrows__btns arrows__btns-bestsellers">
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
    </section>

    <section className="promo2">
        <div className="container">
            <div className="promo2__content">
                <h3 className="promo2__title">Встречайте весну вместе с нами</h3>
                <p className="promo2__text">Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой</p>
                <a className="btn" href="#">Подробнее</a>
            </div>
        </div>
    </section>

    <section className="promo3">
        <div className="container">
            <div className="promo3__content">
                <h3 className="promo3__title">Индивидуальный уход</h3>
                <p className="promo3__text promo3__text-none">Не всегда очевидно, какие элементы и минералы необходимы коже, а многочисленные эксперименты с разными средствами только ухудшают ее качество.</p>
                <p className="promo3__text">Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.</p>
                <button className="btn btn-promo3">Заполнить анкету</button>
            </div>
            <div className="promo3__image">
            </div>
        </div>
    </section>

    <AboutSection />

    <Subscription />

    <ContactsSection />
    
    </>

	)
}

export default Home
