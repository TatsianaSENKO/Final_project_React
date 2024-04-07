import logoSrc from "/src/img/logo.png"
import Social from "../Social/Social"
import "./Footer.css"

function Footer() {
	return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__logo"><a href="/"><img src={logoSrc} alt="logo"/></a></div>
                    <nav className="footer__nav">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="#">Каталог</a></li>
                            <li className="nav__item"><a href="#">О нас</a></li>
                            <li className="nav__item"><a href="#">Магазины</a></li>
                            <li className="nav__item"><a href="#">Контакты</a></li>
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
                    {/* <div className="bottom__right">
                        <span>Политика конфиденциальности</span>
                    </div> */}
                </div>
            </div>
        </footer>


	)
}

export default Footer
