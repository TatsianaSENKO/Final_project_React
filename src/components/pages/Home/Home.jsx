import { useState } from 'react'

import { Link } from "react-router-dom"

import AboutSection from "../../AboutSection/AboutSection.jsx"
import Subscription from "../../Subscription/Subscription.jsx"
import ContactsSection from "../../ContactsSection/ContacsSection.jsx"
import FormModal from '../../FormModal/FormModal.jsx'
import BestsellersSection from '../../BestsellersSection/BestsellersSection.jsx'

import "./Home.css"

function Home() {

    const [modalFormOpen, setModalFormOpen] = useState(false)

    function openFormModal() {
        setModalFormOpen(true)
    }

	return (
        <>
        <section className="promo">
        <div className="container">
            <div className="promo__img promo__img-left">
                <img src="src/img/promo_img_left.png" alt="Facial_care" />
                <div className="promo__img-info">
                    <Link className="promo__img-title" to={`/catalog/${'facial care'}/`}>Уход для лица</Link>
                    <Link className="promo__img-btn" to={`/catalog/${'facial care'}/`}><svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                    </svg>
                    </Link>
                </div>
            </div>
            <div className="promo__content">
                <h1 className="promo__title">MAROON</h1>
                <p className="promo__text">Натуральная косметика
                    для бережного ухода за кожей</p>
                    <Link className="btn" to="/about/">Подробнее</Link>
            </div>
            <div className="promo__img promo__img-right">
                <img src="src/img/promo_img_right.png" alt="Facial_care" />
                <div className="promo__img-info">
                    <Link className="promo__img-title" to={`/catalog/${'body care'}/`}>Уход для тела</Link>
                    <Link className="promo__img-btn" to={`/catalog/${'body care'}/`}><svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                    </svg>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <BestsellersSection/>

    <section className="promo2">
        <div className="container">
            <div className="promo2__content">
                <h3 className="promo2__title">Встречайте весну вместе с нами</h3>
                <p className="promo2__text">Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой</p>
                <Link className="btn" to="/catalog/">Подробнее</Link>
            </div>
        </div>
    </section>

    <section className="promo3">
        <div className="container">
            <div className="promo3__content">
                <h3 className="promo3__title">Индивидуальный уход</h3>
                <p className="promo3__text promo3__text-none">Не всегда очевидно, какие элементы и минералы необходимы коже, а многочисленные эксперименты с разными средствами только ухудшают ее качество.</p>
                <p className="promo3__text">Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.</p>
                <button onClick={openFormModal} className="btn btn-promo3">Заполнить анкету</button>
            </div>
            <div className="promo3__image">
            </div>
        </div>
    </section>

    <FormModal open={modalFormOpen}>
    <div className="container__form">
                <h3 className="form__title">Форма для отправки анкеты</h3>
                <p className="form__text">Ответьте на нижеперечисленные вопросы и наш специалист свяжется с Вами.</p>
                <form action="" method="dialog" >
                    <label className='name-field'>Ваше имя
                    <input type="text" required className='field'/>
                    </label>

                    <label className='name-field'>Ваш возраст
                    <input type="text" required className='field'/>
                    </label>

                    <div className="gender">
                        <h4>Ваш пол</h4>
                        <div className="gender__item">
                        <input type="radio" id="men" className='gender__field'/>
                        <label htmlFor="men">мужчина</label>
                        </div>
                        <div className="gender__item">
                        <input type="radio" id="women" className='gender__field'/>
                        <label htmlFor="women">женщина</label>
                        </div>
                    </div>
                    <label className='name-field'>Тип кожи
                    <input type="text" required className='field'/>
                    </label>

                    <div className="form__button">
                        <button className="btn btn-form">Отправить</button>
                        <button type="reset" className="btn btn-form">Очистить</button>
                    </div>
                </form>
                <button onClick={() => {setModalFormOpen(false)}} className="btn-form-close">X</button>
                </div>
    </FormModal>

    <AboutSection />

    <Subscription />

    <ContactsSection />
    </>

	)
}

export default Home
