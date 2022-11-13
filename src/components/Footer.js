import instagram from "../images/instagram.svg"
import vk from "../images/vkfooter.svg"
import telegram from "../images/telegram.svg"
import whatsapp from "../images/whatsapp.svg"

function Footer(props){
    return(
        <footer className="footer">
            
            <iframe className="footer__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.5796653755986!2d40.5243593163453!3d64.53311129041563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4418342aa163106d%3A0x5bd19dcdb6fd53d2!2z0JDQk9CgLdCd0LXQtNCy0LjQttC40LzQvtGB0YLRjA!5e0!3m2!1sru!2sru!4v1668371080417!5m2!1sru!2sru" width="800" height="600" allowfullscreen="true" loading="lazy" frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="footer__socials-container">
                <p className="footer__paragraph">Соцсети</p>
                <div className="footer__socials">
                    <a href="https://instagram.com/kochurova.rielt" ><img className="footer__img" src={instagram} alt="Логотип инстаграма."></img></a>
                    <a href="https://vk.com/id226778591" ><img className="footer__img" src={vk} alt="Логотип ВК."></img></a>
                    <a href="#" ><img className="footer__img" src={telegram} alt="Логотип телеграма."></img></a>
                    <a href="https://wa.me/79212411506" ><img className="footer__img" src={whatsapp} alt="Логотип WhatsApp."></img></a>
                </div>
            </div>
            <div className="footer__contacts-container">
                <p className="footer__paragraph">Контакты</p>
                <ul className="footer__contacts">
                    <li className="footer__list-item"><a className="footer__link" href="mailto:agrnv@mail.ru" >agrnv@mail.ru</a></li>
                    <li className="footer__list-item"><a className="footer__link" href="tel:+7-921-241-15-06" >+7 (921) 241-15-06</a></li>
                </ul>
            </div>
            <a className="footer__creator-link" href="https://github.com/gettotawer">Кочуров Максим</a>
        </footer>
    );
}

export default Footer;