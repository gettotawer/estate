import img from "../images/kochurova.jpg"
function Main(props){
    return(
        <section className="main">
            <div className="main__container">
                <h1 className="main__title">Мы помогаем мечтам сбываться!</h1>
                <p className="main__paragraph">Для тех, кто хочет быстро продать или купить квартиру по лучшей цене в Арангельске.</p>
                <button className="main__button">Получить консультацию.</button>
            </div>
            <div className="main__image-container">
                {/* <img className="main__image" src={img} alt="Кочурова Наталья"></img> */}
            </div>
        </section>
    );
}

export default Main;