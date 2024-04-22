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

                <div className={`contacts__map ${location.pathname == "/contacts/" ? "contacts__map-page" : ""}`}>
                    {/* <div style={{position:"relative",overflow:"hidden"}}><iframe src="https://yandex.by/map-widget/v1/?ll=30.323036%2C59.938631&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM5NDE4NBJh0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQu9C40YbQsCwgMTkvOCIKDZaV8kEVKcFvQg%2C%2C&z=16.69" width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position:"relative"}}></iframe></div> */}
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.599104784697!2d30.320508377058175!3d59.93879417491514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTExODY!5e0!3m2!1sru!2sby!4v1712509187772!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" ></iframe> */}

                </div>

            </div>
        </section>


	)
}

export default ContactsSection





// referrerpolicy="no-referrer-when-downgrade"