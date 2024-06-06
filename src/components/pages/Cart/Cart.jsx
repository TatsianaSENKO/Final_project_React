import { useContext, useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom"
import InputMask from 'react-input-mask'

import { AppContext } from "../../../App"
import CartNullModal from "./CartNullModal"
import CartModal from "./CartModal"

function Cart() {
    const {cart, setCart} = useContext(AppContext)

    const [total, setTotal] = useState(0)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [hasErrorName, setHasErrorName] = useState(true)
    const [hasErrorPhone, setHasErrorPhone] = useState(true)
    const [hasErrorAddress, setHasErrorAddress] = useState(true)

    const [cartNullModalOpen, setCartNullModalOpen] = useState(false)
    const [cartModalOpen, setCartModalOpen] = useState(false)

    const [cartItems, setCartItems] = useState()

    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isDesktop = useMediaQuery({ minWidth: 768 })


    const changeQuantityPlus = (id, size) => {

        const cartItem = cart.find((item) => item.id == id && item.size == size)

        console.log(cartItem)

        if (cartItem) {
            cartItem.quantity++

            const cartTmp = cart

            setCart([...cartTmp]);
            localStorage.setItem('cart', JSON.stringify(cartTmp));
        }
    }

    const changeQuantityMinus = (id, size) => {

        const cartItem = cart.find((item) => item.id == id && item.size == size)

        console.log(cartItem)

        if (cartItem) {
            cartItem.quantity--

            const cartTmp = cart

            setCart([...cartTmp]);
            localStorage.setItem('cart', JSON.stringify(cartTmp));
        }
    }


    const remove = (id, size) => {

        const cartTmp = cart.filter((item) => !(item.size == size && item.id == id) )

        setCart([...cartTmp])
        localStorage.setItem('cart', JSON.stringify(cartTmp))
    }

    console.log(cart)


    useEffect(() => {
        let totalTmp = 0

        cart.forEach((item) => {
            totalTmp += item.price * item.quantity
        });

        totalTmp = totalTmp.toFixed(2)

        setTotal(totalTmp)

    }, [cart])

    function openCartNullModal() {
        setCartNullModalOpen(true)
    }

    function openCartModal() {
        setCartModalOpen(true)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
        setHasErrorName(event.target.value.trim().length === 0)
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
        setHasErrorAddress(event.target.value.trim().length === 0)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
        setHasErrorPhone(event.target.value.trim().length === 0)
    }

    return (

        <>

        <div className="cart">

            <div className="container">
                <h3 className="cart__title">Корзина товаров</h3>
                {isMobile &&  <ul className="cart__list-mobile">
                    {cart.length == 0 ? null : cart.map((item, index) => {
                        return (
                        <li key={index} className="cart__product-mobile">
                            <div className="cart__product_image-mobile"><img src={item.image} alt="{item.title}" /></div>
                            <div className="cart__product_description-mobile">
                                <div className="cart__product_title"><Link to={`/product/${item.id}/`}>{item.name}</Link></div>
                                <div className="cart__product_size"><span className="name-mobile">Объем:</span> {item.size}</div>
                                <div className="cart__product_price"><span className="name-mobile">Цена:</span> {item.price} ₽</div>
                                <div className="cart__product_quantity">
                                <span className="name-mobile">Количество:</span>
                                <button className="product_quantity__btn" onClick={() => { changeQuantityMinus(item.id, item.size) }}>-</button>
                                {item.quantity}
                                <button className="product_quantity__btn" onClick={() => { changeQuantityPlus(item.id, item.size) }}>+</button>
                                </div>
                                <div className="cart__product_sum">Стоимость: {item.price*item.quantity} ₽</div>
                                <div className="cart__product_btns-mobile"><button onClick={() => { remove(item.id, item.size) }}>x</button></div>
                            </div>

                        </li>

                        )
                    })}
                    <li className="cart__total-mobile">

                        <div className="cart__total">{total} ₽</div>

                    </li>
                    </ul>}
                {isDesktop &&
                <ul className="cart__list">
                    <li className="cart__header">
                        <div className="cart__header_column"></div>
                        <div className="cart__header_column">наименование</div>
                        <div className="cart__header_column">объем</div>
                        <div className="cart__header_column">цена</div>
                        <div className="cart__header_column">количество</div>
                        <div className="cart__header_column">Стоимость</div>
                        <div className="cart__header_column"></div>
                    </li>
                    {cart.length == 0 ? null : cart.map((item, index) => {
                        return (
                        <li key={index} className="cart__product">
                            <div className="cart__product_image"><img src={item.image} alt="{item.title}" /></div>
                            <div className="cart__product_title"><Link to={`/product/${item.id}/`}>{item.name}</Link></div>
                            <div className="cart__product_size">{item.size}</div>
                            <div className="cart__product_price">{item.price} ₽</div>
                            <div className="cart__product_quantity">
                            <button className="product_quantity__btn" onClick={() => { changeQuantityMinus(item.id, item.size) }}>-</button>
                                {item.quantity}
                                <button className="product_quantity__btn" onClick={() => { changeQuantityPlus(item.id, item.size) }}>+</button>
                            </div>
                            <div className="cart__product_sum">{item.price*item.quantity} ₽</div>
                            <div className="cart__product_btns"><button onClick={() => { remove(item.id, item.size) }}>x</button></div>
                        </li>
                        )
                    })}
                    <li className="cart__footer">
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"><div className="cart__total">{total} ₽</div></div>
                        <div className="cart__footer_column"></div>
                    </li>
                </ul>}
                <h3 className="cart__title">Введите данные получателя заказа</h3>
                <form className="form__cart">
                    <div className="delivery">
                        <label className='name-field-cart' id="name">Ваше имя</label>
                        <input type="text" htmlFor="name" value={name} style={{border: hasErrorName ? '1px solid red' : null}} onChange={handleNameChange} className='field-cart'/>

                        <label className='name-field-cart'>Номер телефона</label>
                        <InputMask mask="+375 (99) 999-99-99" maskChar="_" value={phone} style={{border: hasErrorPhone ? '1px solid red' : null}} onChange={handlePhoneChange}>
                            {(inputProps) => <input {...inputProps} className='field-cart' placeholder="+375 (__) ___-__- __" />}
                        </InputMask>

                        <label className='name-field-cart' id="address">Адрес доставки</label>
                        <input type="text" htmlFor="address" value={address} style={{border: hasErrorAddress ? '1px solid red' : null}} onChange={handleAddressChange} className='field-cart'/>
                        <label className='name-field-cart' id="pay">Способ оплаты</label>
                        <select name="select" htmlFor="pay" className="field-cart">
                            <option value="value1">Наличными</option>
                            <option defaultValue="value2">Картой</option>
                        </select>
                    </div>
                </form>
                <div className="form__button-cart">
                        <button onClick={() => {
                        total===0 ? openCartNullModal() : openCartModal();
                        }} disabled={hasErrorName || hasErrorAddress || hasErrorPhone} className="btn btn-form" >Оформить заказ</button>
                        <button type="reset" className="btn btn-form">Очистить</button>
                    </div>
            </div>
        </div>

        <CartNullModal open={cartNullModalOpen}>
            <p className="cart__null">Ваша корзина пуста</p>
            <button onClick={() => {setCartNullModalOpen(false)}} className="btn btn-form-modal">ОК</button>
        </CartNullModal>

        <CartModal open={cartModalOpen}>
            <p className="cart__null">Ваш заказ успешно оформлен. Наш специалист свяжется с Вами в течении 30 минут. Благодарим за покупку!</p>
            <button onClick={() => {setCartModalOpen(false)}} className="btn btn-form-modal">ОК</button>
        </CartModal>

        </>
    )
}

export default Cart