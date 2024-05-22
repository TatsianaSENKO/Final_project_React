
import Subscription from "../../Subscription/Subscription.jsx"
import ContactsSection from "../../ContactsSection/ContacsSection.jsx"

import "./History.css"

function History() {



	return (
        <>

        <section className="history">
                <div className="container">
                    <div className="history__content">
                        <img src="../src/img/img_history_2.jpg" alt="1" />
                        <p className="history__text">Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Океана большого себя от всех текстов рукопись всемогущая дорогу все бросил повстречался инициал ты обеспечивает буквоград, жаренные, он свою составитель! Заглавных, переписали, несколько переулка свой своего над себя ведущими парадигматическая великий проектах дорогу выйти эта рукопись семантика запятой пустился, реторический речью.</p>
                    </div>
                    <div className="history__content">
                        <p className="history__text">Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты.</p>
                        <img src="../src/img/img_history_6.jpg" alt="1" />
                    </div>
                    <div className="history__content">
                        <img src="../src/img/img_history_5.jpg" alt="1" />
                        <p className="history__text">Заглавных, переписали, несколько переулка свой своего над себя ведущими парадигматическая великий проектах дорогу выйти эта рукопись семантика запятой пустился, реторический речью.</p>
                    </div>
                </div>
        </section>

    <Subscription />

    <ContactsSection />

    </>

	)
}

export default History
