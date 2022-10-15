import img from "../images/family-moving-using-boxes_1157-35481.jpeg"
function Main(props){
    return(
        <section className="main">
            <div className="main__container">
                <h1 className="main__title">We Help You To Find Best Propery For Living</h1>
                <p className="main__paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
                <button className="main__button">Find Property</button>
            </div>
            <div className="main__image-container">
                <img className="main__image" src={img} alt="Довольная семья."></img>
            </div>
        </section>
    );
}

export default Main;