import { useState } from 'react'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

import logoSrc from "/src/img/logo.png"

import Nav from "../../components/Nav/Nav"
import CartWidget from "../../components/pages/Cart/CartWidget"
import AuthModal from "../../components/AuthModal/AuthModal"
import Social from '../Social/Social'

import "./Header.css"


function Header() {

    const location = useLocation()

    const [authModalOpen, setAuthModalOpen] = useState(false)

    function openAuthModal() {
        setAuthModalOpen(true)
    }

	return (
        <>
        <header className={`header ${location.pathname == "/" ? "header-home" : ""}`}>
            <div className="container">
                <div className="header__logo"><Link to="/"><img src={logoSrc} alt="logo"/></Link></div>
                    <Nav/>
                    <div className="header__icons">
                        <button onClick={openAuthModal}  className="header__account">
                            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="#122947"/>
                            </svg>
                        </button>
                        <CartWidget />
                    </div>
            </div>
        </header>

        <AuthModal open={authModalOpen}>
            <div className="auth">
                <form className="container__auth">
                    <h3 className="auth__title">Вход в аккаунт</h3>
                    <input type="text" placeholder="Ваш email или номер телефона" required className='field'/>
                    <input type="text" placeholder="Пароль" required className='field'/>
                    <button className="btn btn-form-auth">Войти</button>
                </form>
                <button onClick={() => {setAuthModalOpen(false)}} className="btn-auth-close">X</button>
                {/* <h3 className="auth__title-social">Войти через аккаунт соцсетей</h3>
                <Social/> */}
            </div>
        </AuthModal>

        </>
	)
}

export default Header
