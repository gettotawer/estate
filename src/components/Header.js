function Header(props){
    return(
        <header className="header">
            <div className="header__logo">
                Kochurova.rielt
            </div>
            <nav className='header__container'>
                <a className='header__link' href="#about">О нас</a>
                <a className='header__link' href="#team">Наша команда</a>
                <a className='header__link' href="tel:+7-921-241-15-06">Связаться с нами</a>
            </nav>
        </header>
    );
}

export default Header;