import { useContext, useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom"
import InputMask from 'react-input-mask'

import { AppContext } from "../../../App"
import { MainContext } from "../../Main"
import CartNullModal from "./CartNullModal"
import CartModal from "./CartModal"

function Cart() {
    const {cart, setCart} = useContext(AppContext)
    const data = useContext(MainContext)

    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [hasErrorName, setHasErrorName] = useState(false)
    const [hasErrorPhone, setHasErrorPhone] = useState(false)
    const [hasErrorAddress, setHasErrorAddress] = useState(false)

    const [cartNullModalOpen, setCartNullModalOpen] = useState(false)
    const [cartModalOpen, setCartModalOpen] = useState(false)

    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isDesktop = useMediaQuery({ minWidth: 768 })


    const changeQuantity = (id, size, value) => {

        const cartItem = cart.find((item) => item.id == id && item.size == size)

        if (cartItem) {
            cartItem.quantity = +value;

            console.log(cartItem)

            const cartTmp = cart

            setCart([...cartTmp]);
            localStorage.setItem('cart', JSON.stringify(cartTmp));
        }
    }

    const remove = (id, size) => {

        const cartTmp = cart.filter((item) => !(item.size == size && item.id == id) )

        setCart([...cartTmp])
        console.log(cart)
        localStorage.setItem('cart', JSON.stringify(cartTmp))
    }



    // useEffect(() => {
    //     const cartListTmp = data.filter((product) => {
    //         const cartItem = cart.find((item) => {
    //             product.quantity = item.quantity
    //             product.size = item.size
    //             product.price = item.price

    //             return item.id == product.id
    //         })
    //         console.log(cartItem)

            

    //         if (cartItem) return product
            

    //     })

    //     if (cartListTmp && cartListTmp.length > 0) setCartList([...cartListTmp])




    // }, [cart])

    useEffect(() => {
        let totalTmp = 0

        cart.forEach((item) => {
            totalTmp += item.price * item.quantity
        });

        totalTmp = totalTmp.toFixed(2)

        setTotal(totalTmp)

    }, [cart])

    // useEffect(() => {

    //     if (cart.length == 0) setTotal(0)
    // })

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
                                <div className="cart__product_quantity">Количество: <input min="1" max="100" onChange={(event) => { changeQuantity(item.id, item.size, event.target.value, event.target) }} type="number" defaultValue={item.quantity} /></div>
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
                            <div className="cart__product_quantity"><input min="1" max="100" onChange={(event) => { changeQuantity(item.id, item.size, event.target.value, event.target) }} type="number" defaultValue={item.quantity} /></div>
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

// disabled={hasErrorName || hasErrorAddress || hasErrorPhone}