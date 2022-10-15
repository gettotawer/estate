import newHouse from "../images/new-house-svgrepo-com.svg";
import soldHouse from "../images/house-svgrepo-com.svg"
import happyFam from "../images/happyFam.jpg";
import familia from "../images/familia.jpg"

function About(props){
    return(
        <section className="about">
            <div className="about__image-container">
                <img className="about__image about__image_higher" alt="ЖК в Архангельске" src={familia}></img>
                <img className="about__image about__image_lower" alt="Счастливая семья" src={happyFam}></img>
            </div>
            <div className="about__container">
                <h2 className="about__title">Are You Looking Best Property Near You? Contact Us</h2>
                <p className="about__paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                <div className="about__highlight">
                    <p className="about__exp"><span className="about__age">20 +</span>Years of experience</p>
                </div>
                <p className="about__paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
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

