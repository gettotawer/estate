// import img from "../images/kochurova.jpg"
function Main(props){
    return(
        <section className="main">
            <div className="main__container">
                <div className="main__image-container main__image-container_moved"></div>
                <h1 className="main__title">Мы помогаем мечтам сбываться!</h1>
                <p className="main__paragraph">Для тех, кто хочет быстро продать или купить квартиру по лучшей цене в Арангельске.</p>
                <a className='main__button' href="tel:+7-921-241-15-06">Получить консультацию.</a>
            </div>
            <div className="main__image-container"></div>
        </section>
    );
}

export default Main;