import './Header.css';
import logoNornickel from '../../assets/icons/nornickel-logo.svg';
import logoLeaders from '../../assets/icons/logo-team.svg';

function Header(){
    return (
        <header className="header">
            <div className='fixed-container'>
                <div className="header__container">
                    <div className="header__logo">
                        <img className="logo logo-company" src={logoNornickel} alt='Логотип Норникель'></img>
                        <img className="logo logo-team" src={logoLeaders} alt='Логотип команды Лидеры'></img>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;