import newHouse from "../images/new-house-svgrepo-com.svg";
import soldHouse from "../images/house-svgrepo-com.svg"
import happyFam from "../images/happyFam.jpg";
import familia from "../images/familia.jpg"

function About(props){
    return(
        <section className="about" id="about">
            <div className="about__image-container">
                <img className="about__image about__image_higher" alt="ЖК в Архангельске" src={familia}></img>
                <img className="about__image about__image_lower" alt="Счастливая семья" src={happyFam}></img>
            </div>
            <div className="about__container">
                <h2 className="about__title">Меня зовут Наталья Кочурова, и я рада приветствовать вас на своём сайте!</h2>
                <p className="about__paragraph">Каждый из вас хоть раз в жизни будет выступать в роли продавца или покупателя недвижимости. Это волнительное событие, и вы достойны отличного сервиса!</p>
                <div className="about__highlight">
                    <p className="about__exp"><span className="about__age">20+ лет опыта</span></p>
                </div>
                <p className="about__paragraph">Практика, опыт и моя команда — это то, что позволяет мне сегодня продавать недвижимость на выгодных условиях, а моим клиентам получать качественный сервис.</p>
                <div className="about__achievements-container">
                    <div className="about__achievement-container">
                        <img className="about__achievement-image" alt="Проданный дом." src={soldHouse}></img>
                        <p className="about__achievement-number">1000+</p>
                        <p className="about__achievement-description">Квартир продано</p>
                    </div>
                    <div className="about__achievement-container">
                        <img className="about__achievement-image" alt="Новый дом." src={newHouse}></img>
                        <p className="about__achievement-number">500+</p>
                        <p className="about__achievement-description">Квартир куплено</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

