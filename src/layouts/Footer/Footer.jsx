import { Link } from "react-router-dom"

import logoSrc from "/src/img/logo.png"
import Social from "../Social/Social"
import "./Footer.css"

function Footer() {
	return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__logo"><Link to="/"><img src={logoSrc} alt="logo"/></Link></div>
                    <nav className="footer__nav">
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="/catalog/">Каталог</Link></li>
                            <li className="nav__item"><Link to="/about/">О нас</Link></li>
                            <li className="nav__item"><Link to="/contacts/">Контакты</Link></li>
                        </ul>
                    </nav>
                    <Social />
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="bottom__left">
                        <span>Maroon</span>
                        <span> &#169; </span>
                        <span>2020 Все права защищены</span>
                    </div>
                </div>
            </div>
        </footer>


	)
}

export default Footer
