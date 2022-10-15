import instagram from "../images/instagram.svg"
import vk from "../images/vk.svg"
import portrait from "../images/portrait.jpg"
function Team(props){
    return(
        <section className="team">
            <h2 className="team__title">Meet Our Popular Agents</h2>
            <p className="team__paragraph">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            <div className="team__workers">
                <div className="person">
                    <img className="person__photo" src={portrait} alt="Портрет"></img>
                    <p className="person__name">Oleg Olegov</p>
                    <p className="person__profession">Agent</p>
                    <div className="person__socials">
                        <a href="#"><img className="person__img" src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#"><img className="person__img" src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo" src={portrait} alt="Портрет"></img>
                    <p className="person__name">Oleg Olegov</p>
                    <p className="person__profession">Agent</p>
                    <div className="person__socials">
                        <a href="#"><img className="person__img" src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#"><img className="person__img" src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo" src={portrait} alt="Портрет"></img>
                    <p className="person__name">Oleg Olegov</p>
                    <p className="person__profession">Agent</p>
                    <div className="person__socials">
                        <a href="#"><img className="person__img" src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#"><img className="person__img" src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo" src={portrait} alt="Портрет"></img>
                    <p className="person__name">Oleg Olegov</p>
                    <p className="person__profession">Agent</p>
                    <div className="person__socials">
                        <a href="#"><img className="person__img" src={instagram} alt="Логотип инстаграма."></img></a>
                        <a href="#"><img className="person__img" src={vk} alt="Логотип ВК."></img></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;