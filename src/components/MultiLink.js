import React from 'react';
import kochurova_portrait from "../images/kochurova_portrait.jpg"
import instagram from "../images/instagram.svg"
import vk from "../images/vkfooter.svg"
import whatsapp from "../images/whatsapp.svg"
import download from "../images/download-svgrepo-com (1).svg"
import { Link } from 'react-router-dom';

function MultiLink() {
  return (
    <section className='multi-link'>
        <div className='multi-link__container'>
            <img className="multi-link__photo" src={kochurova_portrait} alt="Портрет" style={{objectPosition: "50% 10%",}}></img>
            <p className='multi-link__name'>Кочурова Наталья Владимировна</p>
            <p className='multi-link__description'>Агент по недвижимости. Продажи по системе МФО.</p>
            <a href="tel:+7-921-241-15-06" className='multi-link__contact'>+7(921)-241-15-06</a>
            <a  className='multi-link__contact' href="mailto:agrnv@mail.ru" >agrnv@mail.ru</a>
            <Link to="/" className='multi-link__link'>Подробнее</Link>
            <div className='multi-link__socials'>
                <a href="https://instagram.com/kochurova.rielt" target="_blank" rel='noreferrer'><img className="multi-link__img" src={instagram} alt="Логотип инстаграма."></img></a>
                <a href="https://vk.com/n.kochurova.nedv" target="_blank" rel='noreferrer'><img className="multi-link__img" src={vk} alt="Логотип ВК."></img></a>
                <a href="https://wa.me/79212411506" target="_blank" rel='noreferrer'><img className="multi-link__img" src={whatsapp} alt="Логотип WhatsApp."></img></a>
            </div>
            <a className='multi-link__save-button' href="https://api.myqrcards.com/cardLinks/6GJCP1eAmuq/card/download">Сохранить в контакты <img className="multi-link__download-icon" src={download} alt="Иконка загрузки"></img></a>
        </div>
    </section>
  );
}

export default MultiLink;