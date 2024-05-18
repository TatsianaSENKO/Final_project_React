import { useState } from 'react'

import "./Subscription.css"
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal.jsx'

function Subscription() {

    const [modalSubscriptionOpen, setModalSubscriptionOpen] = useState(false)

    function openSubscriptionModal() {
        setModalSubscriptionOpen(true)
    }
	return (
    <>
    <section className="subscription">
        <div className="container">
            <div className="subscription__images">
                <img src="/src/img/subscription_1.png" alt="cream" />
                <img src="/src/img/subscription_2.png" alt="oil" />
                <img src="/src/img/subscription_3.png" alt="care" />
                <img src="/src/img/subscription_4.png" alt="cosmetics" />
                <img src="/src/img/subscription_5.png" alt="cream" />
                <img src="/src/img/subscription_6.png" alt="oil" />
            </div>
            <div className="subscription__content">
                <h3 className="subscription__title">Присоединяйтесь к нам</h3>
                <p className="subscription__text">Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми</p>
                <button className="btn btn-subscription" onClick={openSubscriptionModal}>Подписаться</button>
            </div>
        </div>
    </section>

    <SubscriptionModal open={modalSubscriptionOpen}>
        <form action="" method="dialog" className="form__subscription">
            <label className='mail-field'>Электронная почта
            <input type="email" required className='field'/>
            </label>
            <p>* Нажимая кнопку отправить Вы даете согласие на получение рассылки.</p>
            <button className="btn btn-form-subscription">Отправить</button>
        </form>
        <button onClick={() => {setModalSubscriptionOpen(false)}} className="btn-form-close">X</button>
    </SubscriptionModal>
    </>
)
}

export default Subscription