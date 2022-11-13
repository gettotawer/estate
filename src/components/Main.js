// import img from "../images/kochurova.jpg"
function Main(props){
    return(
        <section className="main">
            <div className="main__container">
                <h1 className="main__title">Мы помогаем мечтам сбываться!</h1>
                <p className="main__paragraph">Для тех, кто хочет быстро продать или купить квартиру по лучшей цене в Арангельске.</p>
                <a className='main__button' href="tel:+7-921-241-15-06">Получить консультацию.</a>
            </div>
            <div className="main__image-container">
                {/* <img className="main__image" src={img} alt="Кочурова Наталья"></img> */}
            </div>
        </section>
    );
}

export default Main;