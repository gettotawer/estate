function Header(props){
    return(
        <header className="header">
            <div className="header__logo">
                i am logo
            </div>
            <nav className='header__container'>
                <a className='header__link' href="https://dev-gang.ru/article/programmnaja-navigacija-s-ispolzovaniem-react-router-lzmorueggt/">О нас</a>
                <a className='header__link' href="https://dev-gang.ru/article/programmnaja-navigacija-s-ispolzovaniem-react-router-lzmorueggt/">Наша команда</a>
                <a className='header__link' href="https://dev-gang.ru/article/programmnaja-navigacija-s-ispolzovaniem-react-router-lzmorueggt/">Объекты</a>
                <a className='header__link' href="https://dev-gang.ru/article/programmnaja-navigacija-s-ispolzovaniem-react-router-lzmorueggt/">Связаться с нами</a>
            </nav>
        </header>
    );
}

export default Header;