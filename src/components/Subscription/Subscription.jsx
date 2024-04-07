import "./Subscription.css"

function Subscription() {
	return (
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
            <button className="btn btn-subscription">Подписаться</button>
        </div>
    </div>
</section>

)
}

export default Subscription