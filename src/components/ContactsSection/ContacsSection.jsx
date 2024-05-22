import Social from "../../layouts/Social/Social"
import "./ContactsSection.css"

function ContactsSection() {

	return (

        <section className="contacts">
            <div className={`container ${location.pathname == "/contacts/" ? "contacts-page" : ""}`}>
                <div className={`contacts__content ${location.pathname == "/contacts/" ? "contacts__content-page" : ""}`}>
                    <h3 className="contacts__title">Контакты</h3>
                    <div className="contacts__info">
                        <div className="contacts__address item">
                            <h4 className="item__title">Адрес</h4>
                            <span className="item__info">Санкт-Петербург,<br/> ул. Большая Конюшенная, 19</span>
                        </div>
                        <div className="contacts__phone item">
                            <h4 className="item__title">Телефон</h4>
                            <a className="item__info" href="#">+7 (923) 888-90-60</a>
                        </div>
                        <div className="contacts__email item">
                            <h4 className="item__title">E-mail</h4>
                            <a className="item__info" href="#">info@maroon.ru</a>
                        </div>
                        <Social />
                    </div>
                </div>

                {/* <div className={`contacts__map ${location.pathname == "/contacts/" ? "contacts__map-page" : ""}`}>
                    <div style={{position:"relative",overflow:"hidden"}}><iframe src="https://yandex.by/map-widget/v1/?ll=30.323036%2C59.938631&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM5NDE4NBJh0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQu9C40YbQsCwgMTkvOCIKDZaV8kEVKcFvQg%2C%2C&z=16.69" width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position:"relative"}}></iframe></div>

                </div> */}

            </div>
        </section>


	)
}

export default ContactsSection
