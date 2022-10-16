function Header(props){
    return(
        <header className="header">
            <div className="header__logo">
                Kochurova.rielt
            </div>
            <nav className='header__container'>
                <a className='header__link' href="#about">О нас</a>
                <a className='header__link' href="#team">Наша команда</a>
                <a className='header__link' href="https://dev-gang.ru/article/programmnaja-navigacija-s-ispolzovaniem-react-router-lzmorueggt/">Связаться с нами</a>
            </nav>
        </header>
    );
}

export default Header;