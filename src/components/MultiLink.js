import React from 'react';
import kochurova_portrait from "../images/kochurova_portrait.jpg"
import instagram from "../images/instagram.svg"
import vk from "../images/vkfooter.svg"
import telegram from "../images/telegram.svg"
import whatsapp from "../images/whatsapp.svg"
import callme from "../images/call-svgrepo-com.svg"
import { Link } from 'react-router-dom';

function MultiLink() {
  return (
    <section className='multi-link'>
        <div className='multi-link__container'>
            <img className="multi-link__photo" src={kochurova_portrait} alt="Портрет" style={{objectPosition: "50% 10%",}}></img>
            <p className='multi-link__name'>Кочурова Наталья Владимировна</p>
            <p className='multi-link__description'>Агент по недвижимости.</p>
            <Link to="/" className='multi-link__link'>Подробнее</Link>
            <div className='multi-link__socials'>
                <a href="tel:+7-921-241-15-06" ><img className="multi-link__img multi-link__filter-blue " src={callme} alt="Иконка звонка"></img></a>
                <a href="https://instagram.com/kochurova.rielt" ><img className="multi-link__img" src={instagram} alt="Логотип инстаграма."></img></a>
                <a href="https://vk.com/id226778591" ><img className="multi-link__img" src={vk} alt="Логотип ВК."></img></a>
                <a href="#" ><img className="footer__img" src={telegram} alt="Логотип телеграма."></img></a>
                <a href="https://wa.me/79212411506" ><img className="multi-link__img" src={whatsapp} alt="Логотип WhatsApp."></img></a>
            </div>
        </div>
    </section>
  );
}

export default MultiLink;