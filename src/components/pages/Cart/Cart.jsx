import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { AppContext } from "../../../App"
import { MainContext } from "../../Main"

function Cart() {
    const {cart, setCart} = useContext(AppContext)
    const data = useContext(MainContext)

    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)

    const changeQuantity = (id, value) => {

        const cartItem = cart.find((item) => item.id == id)

        if (cartItem) {
            cartItem.quantity = +value;

            const cartTmp = cart;

            setCart([...cartTmp]);
            localStorage.setItem('cart', JSON.stringify(cartTmp));
        }
    }

    const remove = (id) => {

        const cartTmp = cartList.filter((item) => item.id != id)

        setCart([...cartTmp])
        localStorage.setItem('cart', JSON.stringify(cartTmp))
    }

    useEffect(() => {
        const cartListTmp = data.filter((product) => {
            const cartItem = cart.find((item) => {
                product.quantity = item.quantity;
                return item.id == product.id;
            });

            if (cartItem) return product;
        });

        if (cartListTmp && cartListTmp.length > 0) setCartList([...cartListTmp])


    }, [cart])

    useEffect(() => {
        let totalTmp = 0

        cartList.forEach((item) => {
            totalTmp += item.price * item.quantity
        });

        totalTmp = totalTmp.toFixed(2)

        setTotal(totalTmp)

        console.log(cartList)

    }, [cartList])

    useEffect(() => {

        if (cart.length == 0) setTotal(0)

    })

    return (

        <div className="cart">
            <div className="container">
                <h3 className="cart__title">Корзина товаров</h3>
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
                    {cart.length == 0 ? null : cartList.map((item, index) => {
                        return (
                        <li key={index} className="cart__product">
                            <div className="cart__product_image"><img src={item.imageTile} alt="{item.title}" /></div>
                            <div className="cart__product_title"><Link to={`/product/${item.id}/`}>{item.name}</Link></div>
                            <div className="cart__product_size">${item.size}</div>
                            <div className="cart__product_price">${item.price}</div>
                            <div className="cart__product_quantity"><input min="1" max="100" onChange={(event) => { changeQuantity(item.id, event.target.value, event.target) }} type="number" defaultValue={item.quantity} /></div>
                            <div className="cart__product_sum">${item.price*item.quantity}</div>
                            <div className="cart__product_btns"><button onClick={() => { remove(item.id) }}>x</button></div>
                        </li>
                        );
                    })}
                    <li className="cart__footer">
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"></div>
                        <div className="cart__footer_column"><div className="cart__total">${total}</div></div>
                        <div className="cart__footer_column"></div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Cart