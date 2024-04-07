import { useState } from "react"
import { Link } from "react-router-dom"

import Social from "../../layouts/Social/Social"
import "./Nav.css"


function Nav() {

    const [nav, setNav] = useState()

	return (
        <>
        <nav className="header__nav">
            <ul className={`nav__list ${nav ? "active" : ""}`}>
                <li className="nav__item" onClick={() => setNav (!nav)}><Link to="/catalog/">Каталог</Link></li>
                <li className="nav__item" onClick={() => setNav (!nav)}><Link to="/about/">О нас</Link></li>
                <li className="nav__item" onClick={() => setNav (!nav)}><Link to="/contacts/">Контакты</Link></li>
                <li className="nav__item" onClick={() => setNav (!nav)}><Social /></li>
            </ul>
            <button className="nav__toggle" onClick={() => setNav (!nav)}>
                        {nav ? <span className="toggle__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 10M19 19L10 10M10 10L19 1L1 19" stroke="#122947" strokeWidth="2"/></svg></span> : <span className="toggle__icon"><svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H24M0 7H24M0 13H24" stroke="#122947" strokeWidth="2"/></svg></span>}
            </button>
        </nav>
        </>
	)
}
export default Nav
