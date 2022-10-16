import instagram from "../images/instagram.svg"
import vk from "../images/vk.svg"
import kochurova_portrait from "../images/kochurova_portrait.jpg"
import kabanova_portrait from "../images/kabanova_portrait.jpg"
import erofeevskaya_portrait from "../images/erofeevskaya_portrait.jpg"
import Shimkovich_portrait from "../images/Shimkovich_portrait.jpg"
// import kochurova_portrait from "../images/kochurova_portrait.jpg"
// import kochurova_portrait from "../images/kochurova_portrait.jpg"
function Team(props){
    return(
        <section className="team" id="team">
            <h2 className="team__title">Давайте знакомиться с нашей командой.</h2>
            <p className="team__paragraph">Мы умеем не только решать все вопросы, связанные с покупкой и продажей недвижимости, но и чуствовать их потребности людей, помогать им делать правильный выбор.</p>
            <div className="team__workers">
            <div className="person">
                    <img className="person__photo" src={kochurova_portrait} alt="Портрет" style={{objectPosition: "50% 10%",}}></img>
                    <p className="person__name">Кочурова Наталья</p>
                    <p className="person__profession">Агент</p>
                    <div className="person__socials">
                        <a href="#" className="person__img"><img src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#" className="person__img"><img src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo" src={kabanova_portrait} alt="Портрет" style={{objectPosition: "50% 45%",}}></img>
                    <p className="person__name">Ольга Кабанова</p>
                    <p className="person__profession">Листинг-агент</p>
                    <div className="person__socials">
                        <a href="#" className="person__img"><img src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#" className="person__img"><img src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo" src={Shimkovich_portrait} alt="Портрет" style={{objectPosition: "50% 30%",}}></img>
                    <p className="person__name">Евгения Шимкович</p>
                    <p className="person__profession">Агент по работе с покупателями</p>
                    <div className="person__socials">
                        <a href="#" className="person__img"><img src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#" className="person__img"><img src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo" src={erofeevskaya_portrait} alt="Портрет" style={{objectPosition: "65% 50%",}}></img>
                    <p className="person__name">Наталия Ерофеевская</p>
                    <p className="person__profession">Администратор</p>
                    <div className="person__socials">
                        <a href="#" className="person__img"><img src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#" className="person__img"><img src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo"  alt="Портрет"></img>
                    <p className="person__name">Ирина Тарноруцкая</p>
                    <p className="person__profession">Юрист</p>
                    <div className="person__socials">
                        <a href="#" className="person__img"><img src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#" className="person__img"><img src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo" alt="Портрет"></img>
                    <p className="person__name">Елена Чугунова</p>
                    <p className="person__profession">Юрист</p>
                    <div className="person__socials">
                        <a href="#" className="person__img"><img src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#" className="person__img"><img src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;